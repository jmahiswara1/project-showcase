"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const COLS = 44;
const ROWS = 8;
const HOVER_RADIUS = 220;    // px — radius of mouse influence
const BASE_SIZE = 2;          // default square half-size (very small)
const MAX_SIZE = 7;          // max half-size at cursor center

export function HalftoneGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef<{ x: number; y: number } | null>(null);
    const rafRef = useRef<number>(0);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };
        const handleLeave = () => {
            mouseRef.current = null;
        };

        canvas.addEventListener("mousemove", handleMouse);
        canvas.addEventListener("mouseleave", handleLeave);
        window.addEventListener("resize", resize);

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            const isDark = theme === "dark";
            const bg = isDark ? "#000000" : "#ffffff";
            const dotColor = isDark ? "#ffffff" : "#000000";

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            const cellW = W / COLS;
            const cellH = H / ROWS;
            const mouse = mouseRef.current;

            for (let row = 0; row < ROWS; row++) {
                for (let col = 0; col < COLS; col++) {
                    const x = cellW * col + cellW / 2;
                    const y = cellH * row + cellH / 2;

                    let size = BASE_SIZE;

                    if (mouse) {
                        const dx = x - mouse.x;
                        const dy = y - mouse.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < HOVER_RADIUS) {
                            const t = 1 - dist / HOVER_RADIUS;
                            // Smooth cubic easing
                            const eased = t * t * (3 - 2 * t);
                            size = BASE_SIZE + (MAX_SIZE - BASE_SIZE) * eased;
                        }
                    }

                    ctx.fillStyle = dotColor;
                    ctx.fillRect(x - size, y - size, size * 2, size * 2);
                }
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        rafRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(rafRef.current);
            canvas.removeEventListener("mousemove", handleMouse);
            canvas.removeEventListener("mouseleave", handleLeave);
            window.removeEventListener("resize", resize);
        };
    }, [theme]);

    return (
        <section className="w-full overflow-hidden" style={{ height: "120px" }}>
            <canvas
                ref={canvasRef}
                className="w-full h-full cursor-crosshair"
                style={{ display: "block" }}
            />
        </section>
    );
}
