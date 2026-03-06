export type Project = {
  slug: string;
  title: string;
  description: { id: string; en: string };
  techStack: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  image: string;
  duration: string;
  category: string;
  status: "Live" | "In Development" | "Archived";
  role: string;
  tags: string[];
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "jayabaya-trans",
    category: "Frontend",
    title: "Jayabaya Trans",
    description: {
      id: "Website sewa mobil modern dengan katalog kendaraan interaktif dan fitur perbandingan mobil (Zustand). Integrasi pemesanan langsung via WhatsApp.",
      en: "Modern car rental website with an interactive vehicle catalog and car comparison feature (Zustand). Direct booking integration via WhatsApp."
    },
    techStack: ["Next.js 14", "Zustand", "Tailwind CSS", "Framer Motion"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/jayabayatrans.png",
    liveUrl: "https://jayabayatrans.vercel.app/",
    githubUrl: "https://github.com/jmahiswara1/jayabaya-trans.git",
    duration: "1 Month",
    status: "Live",
    role: "Frontend Developer",
    tags: ["Rental", "Car", "Booking"],
    featured: true,
    year: "2024"
  },
  {
    slug: "xera-outdoor",
    category: "Fullstack",
    title: "Xera Outdoor",
    description: {
      id: "Platform penyewaan perlengkapan outdoor dengan konsep premium earth-tone. Mendukung tracking order flow dan manajemen stok otomatis.",
      en: "Premium earth-tone outdoor gear rental platform. Supports order flow tracking and automated stock management."
    },
    techStack: ["Next.js 16", "Supabase", "PostgreSQL", "Cloudinary"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/xera-outdoor.png",
    liveUrl: "https://xeraoutdoor.vercel.app/",
    githubUrl: "https://github.com/jmahiswara1/rental-outdoor.git",
    duration: "2 Months",
    status: "Live",
    role: "Fullstack Developer",
    tags: ["Rental", "Outdoor", "E-Commerce"],
    featured: true,
    year: "2024"
  },
  {
    slug: "mailflow-api",
    category: "Backend / API",
    title: "MailFlow API",
    description: {
      id: "Backend email marketing dengan sistem antrean Redis/Bull dan tracking pixel untuk analisis campaign real-time.",
      en: "Email marketing backend with Redis/Bull queue system and pixel tracking for real-time campaign analysis."
    },
    techStack: ["Node.js", "Express.js", "Redis", "MongoDB"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/mailflow-api.png",
    liveUrl: null,
    githubUrl: "https://github.com/jmahiswara1/mail-flow-api.git",
    duration: "1 Month",
    status: "In Development",
    role: "Backend Developer",
    tags: ["API", "Email", "Redis"],
    featured: true,
    year: "2024"
  },
  {
    slug: "kopipi",
    category: "Frontend / UI/UX",
    title: "Kopipi.",
    description: {
      id: "Platform reservasi kopi dengan fitur Coffee Matchmaker berdasarkan mood dan storytelling bisnis menggunakan efek parallax.",
      en: "Coffee reservation platform featuring a mood-based Coffee Matchmaker and business storytelling using parallax effects."
    },
    techStack: ["Next.js 14", "Framer Motion", "GSAP", "Lucide React"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/kopipi.png",
    liveUrl: "https://kopipi.vercel.app/",
    githubUrl: "https://github.com/jmahiswara1/kopipi.git",
    duration: "1 Month",
    status: "Live",
    role: "Frontend Developer",
    tags: ["UI/UX", "Coffee", "Parallax"],
    featured: true,
    year: "2024"
  },
  {
    slug: "cube-timer",
    category: "Frontend / PWA",
    title: "Cube Timer",
    description: {
      id: "Aplikasi pencatat waktu Rubik's Cube bergaya Neobrutalism dengan generator scramble WCA dan dukungan PWA.",
      en: "Neobrutalism-style Rubik's Cube timer application with WCA scramble generator and PWA support."
    },
    techStack: ["Next.js 15", "TypeScript", "PWA", "Tailwind CSS"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/cube-timer.png",
    liveUrl: "https://neocubetimer.vercel.app/",
    githubUrl: "https://github.com/jmahiswara1/cube-timer",
    duration: "1 Month",
    status: "Live",
    role: "Frontend Developer",
    tags: ["PWA", "Rubik's Cube", "Timer"],
    featured: false,
    year: "2024"
  },
  {
    slug: "smart-pos",
    category: "Fullstack",
    title: "SmartPOS",
    description: {
      id: "Aplikasi kasir (POS) modern dengan manajemen inventaris, pelanggan, dan dashboard analitik real-time.",
      en: "Modern Point of Sale (POS) application with inventory management, customer tracking, and real-time analytics dashboard."
    },
    techStack: ["NestJS", "React", "Prisma", "PostgreSQL"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/smart-pos.png",
    liveUrl: null,
    githubUrl: "https://github.com/jmahiswara1/smart-pos.git",
    duration: "3 Months",
    status: "In Development",
    role: "Fullstack Developer",
    tags: ["POS", "Dashboard", "Analytics"],
    featured: true,
    year: "2023"
  },
  {
    slug: "elms-api",
    category: "Backend / API",
    title: "Intern ELMS API",
    description: {
      id: "RESTful API manajemen cuti karyawan menggunakan Laravel 11 dengan Service-Repository Pattern.",
      en: "RESTful employee leave management API using Laravel 11 with the Service-Repository Pattern."
    },
    techStack: ["Laravel", "PHP", "PostgreSQL", "Sanctum"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/elms-api.png",
    liveUrl: "https://documenter.getpostman.com/view/50579029/2sBXc8pP5D",
    githubUrl: "https://github.com/jmahiswara1/intern-elms-api.git",
    duration: "3 Months",
    status: "Live",
    role: "Backend Developer",
    tags: ["API", "Laravel", "Management"],
    featured: false,
    year: "2024"
  },
  {
    slug: "minexia",
    category: "Fullstack / AI",
    title: "Minexia Optimize",
    description: {
      id: "Platform AI untuk optimasi rantai pasok pertambangan secara end-to-end. Fokus pada analisis efisiensi industri.",
      en: "AI platform for end-to-end mining supply chain optimization. Focused on industrial efficiency analysis."
    },
    techStack: ["Next.js", "Express.js", "PostgreSQL", "AI/ML"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/minexia-optimize.png",
    liveUrl: "https://minexia-optimize.vercel.app/",
    githubUrl: null,
    duration: "4 Months",
    status: "Live",
    role: "Fullstack Developer",
    tags: ["AI", "Supply Chain", "Optimization"],
    featured: true,
    year: "2024"
  },
  {
    slug: "diary-food",
    category: "Fullstack / AI",
    title: "Diary Food",
    description: {
      id: "Komunitas kuliner berbagi resep dengan fitur 'Ask AI' untuk solusi memasak personal.",
      en: "Culinary community for sharing recipes featuring an 'Ask AI' tool for personalized cooking solutions."
    },
    techStack: ["Next.js", "Express.js", "PostgreSQL", "Google Gemini"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/diary-food.png",
    liveUrl: "https://diary-food1222.vercel.app/",
    githubUrl: "https://github.com/ilhaaam24/diary-food.git",
    duration: "2 Months",
    status: "Live",
    role: "Fullstack Developer",
    tags: ["Community", "Recipes", "AI"],
    featured: false,
    year: "2024"
  },
  {
    slug: "pojok-foto",
    category: "Fullstack",
    title: "Pojok Foto",
    description: {
      id: "Aplikasi Photo Booth berbasis web dengan desain Neobrutalisme untuk mengambil dan mengedit foto di browser.",
      en: "Web-based Photo Booth application featuring Neobrutalism design for capturing and editing photos directly in the browser."
    },
    techStack: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/pojok-foto.png",
    liveUrl: "https://pojok-foto.vercel.app/",
    githubUrl: null,
    duration: "1 Month",
    status: "Live",
    role: "Fullstack Developer",
    tags: ["Photo Booth", "Neobrutalism", "Canvas"],
    featured: false,
    year: "2024"
  },
  {
    slug: "bookshelf-api",
    category: "Backend / API",
    title: "Bookshelf API",
    description: {
      id: "API manajemen buku (CRUD) dengan filter pencarian untuk submission kelas Back-End Pemula.",
      en: "Book management API (CRUD) with search filters for Beginner Back-End class submission."
    },
    techStack: ["Node.js", "Hapi Framework", "JavaScript"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/bookshelf-api.png",
    liveUrl: "https://gd-bookshelf-api.vercel.app/docs",
    githubUrl: null,
    duration: "1 Week",
    status: "Live",
    role: "Backend Developer",
    tags: ["API", "Dicoding", "CRUD"],
    featured: false,
    year: "2023"
  },
  {
    slug: "main-portfolio",
    category: "Fullstack / AI",
    title: "Gadang's Portfolio",
    description: {
      id: "Portfolio modern dengan elemen 3D interaktif, integrasi AI Gemini, dan animasi kompleks.",
      en: "Modern portfolio with interactive 3D elements, Gemini AI integration, and complex animations."
    },
    techStack: ["Next.js 16", "Three.js", "Framer Motion", "Supabase"],
    image: "https://froduosjtxuwznjqiamn.supabase.co/storage/v1/object/public/portfolio-images/projects/gadangmahiswara-portfolio.png",
    liveUrl: "https://jmahiswara.my.id",
    githubUrl: null,
    duration: "1 Month",
    status: "Live",
    role: "Frontend Developer",
    tags: ["Portfolio", "3D", "Interactive"],
    featured: true,
    year: "2024"
  }
];
