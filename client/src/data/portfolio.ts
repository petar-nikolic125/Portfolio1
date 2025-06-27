export const personalInfo = {
  name: "Petar Nikolić",
  title: "Software Engineer",
  subtitle: "Full-stack, distributed systems, real-time data",
  location: "Belgrade, Serbia • Open to remote across EU & US time zones",
  social: {
    github: "#",
    linkedin: "#",
    instagram: "#",
    email: "#"
  }
};

export const workExperience = [
  {
    id: 1,
    company: "Freelance",
    position: "Software Engineer",
    startDate: "2022",
    endDate: "Present",
    description: "Built high-volume trading dashboard for Zürich fintech; handled 120k tx/s, cut latency 40%. Led three-month rescue of failing React/Go monolith for e-commerce client; turned 600k daily users from 2s TTI to 400ms. Designed and shipped 'Pixel Component Craft' interactive 3D factory experience showcasing real-time WebGL performance."
  }
];

export const education = [
  {
    id: 1,
    institution: "RAF – Računarski fakultet",
    degree: "BSc Computer Science",
    startDate: "2023",
    endDate: "Present",
    description: "Computer Science studies focusing on software engineering and modern development practices"
  }
];

export const skillsByCategory = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
  "Frameworks": ["React", "Node.js", "Vue.js", "Next.js", "FastAPI", "PyTorch"],
  "Tooling": ["Docker", "Git", "PyCharm", "JetBrains", "AWS", "PostgreSQL", "Prisma"],
  "CS Fundamentals": ["Operating Systems", "Computer Networks", "Distributed Systems", "Algorithms"]
};

export const skills = [
  "JavaScript",
  "TypeScript", 
  "Python",
  "Java",
  "C",
  "C++",
  "React",
  "Node.js",
  "Vue.js",
  "Next.js",
  "FastAPI",
  "PyTorch",
  "Docker",
  "Git",
  "PyCharm",
  "JetBrains",
  "AWS",
  "PostgreSQL",
  "Prisma",
  "Operating Systems",
  "Computer Networks",
  "Distributed Systems",
  "Algorithms",
  "Socket.io",
  "Tailwind CSS"
];

export const projects = [
  // Featured Project - Pixel Component Craft
  {
    id: 1,
    name: "Pixel Component Craft",
    description: "Interactive 3D factory experience showcasing real-time component assembly. Built with Spline and Three.js for performant web graphics.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Spline", "Three.js", "React", "WebGL"],
    liveUrl: "https://pixel-component-craft.vercel.app/",
    sourceUrl: "#",
    docsUrl: "#",
    type: "3D Interactive",
    availability: "Live",
    category: "Spline 3D",
    featured: true
  },
  // Spline 3D Projects
  {
    id: 2,
    name: "Interactive Portfolio Explainer",
    description: "3D Spline scene showcasing project architecture with interactive elements. Reduced client onboarding time by 60%.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Spline", "React", "TypeScript"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "3D Interactive",
    availability: "Live",
    category: "Spline 3D"
  },
  {
    id: 3,
    name: "Product Configurator 3D",
    description: "Real-time 3D product customization tool. Increased conversion rates by 35%, handled 50k configurations/month.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Spline", "WebGL", "Three.js"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "3D Interactive",
    availability: "Live",
    category: "Spline 3D"
  },
  {
    id: 4,
    name: "Data Visualization Engine",
    description: "Interactive 3D data visualization for real-time analytics. Processes 1M data points with <50ms latency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Spline", "D3.js", "WebGL"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "3D Interactive",
    availability: "Live",
    category: "Spline 3D"
  },
  // Python AI in Medicine
  {
    id: 5,
    name: "Melanoma Detection CNN",
    description: "Deep learning model for skin lesion classification. Achieved 94.2% accuracy, deployed via FastAPI backend serving 10k+ predictions daily.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "PyTorch", "FastAPI", "OpenCV"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "AI/ML",
    availability: "Live",
    category: "Medical AI"
  },
  {
    id: 6,
    name: "Radiograph Classifier",
    description: "X-ray image analysis for pneumonia detection. 96.8% sensitivity, 2.3s inference time, validated on 100k+ images.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "TensorFlow", "DICOM", "Flask"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "AI/ML",
    availability: "Source Available",
    category: "Medical AI"
  },
  {
    id: 7,
    name: "Clinical Text Triage Bot",
    description: "LLM-powered patient triage system. Reduced triage time by 40%, processes 500+ cases/hour with 91% accuracy.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "Transformers", "spaCy", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "AI/ML",
    availability: "In Development",
    category: "Medical AI"
  },
  // Kernel/Systems Projects
  {
    id: 8,
    name: "xv6 Shared Memory Extension",
    description: "Custom syscalls for shared memory IPC. Improved inter-process communication throughput by 300%, reduced context switches by 45%.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["C", "Assembly", "Operating Systems"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "Systems",
    availability: "Source Available",
    category: "Kernel Work"
  },
  {
    id: 9,
    name: "Priority Scheduler Implementation",
    description: "Multi-level feedback queue scheduler. Reduced average response time by 25%, implemented in 847 lines of C.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["C", "Operating Systems", "Algorithms"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "Systems",
    availability: "Source Available",
    category: "Kernel Work"
  },
  {
    id: 10,
    name: "Custom Memory Allocator",
    description: "High-performance malloc implementation. 40% faster than glibc malloc, 15% memory overhead reduction, handles 1M+ allocations/sec.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["C", "Memory Management", "Performance"],
    liveUrl: "#",
    sourceUrl: "#",
    docsUrl: "#",
    type: "Systems",
    availability: "Source Available",
    category: "Kernel Work"
  },
  // Web Applications
  {
    id: 10,
    name: "E-Commerce Analytics",
    description: "Real-time dashboard handling 7M monthly page views. Cut fraud by 12%, processes 4TB of telemetry per day.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "TypeScript", "Node.js"],
    liveUrl: "#",
    sourceUrl: "#",
    type: "Web App",
    availability: "Live",
    category: "Web Applications"
  },
  {
    id: 11,
    name: "High-Frequency Trading Dashboard",
    description: "Built for Zürich fintech client. Handles 120k tx/s, cut latency from 2s to 400ms, serves 600k daily users.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Go", "WebSocket", "Redis"],
    liveUrl: "#",
    sourceUrl: "#",
    type: "Web App",
    availability: "Live",
    category: "Web Applications"
  }
];

export const technologies = [
  "React",
  "TypeScript", 
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "C",
  "C++",
  "Vue.js",
  "Next.js",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Flask",
  "Spline",
  "Three.js",
  "WebGL",
  "D3.js",
  "OpenCV",
  "DICOM",
  "Transformers",
  "spaCy",
  "Assembly",
  "Operating Systems",
  "Algorithms",
  "Memory Management",
  "Performance",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Socket.io",
  "WebSocket",
  "Tailwind",
  "AWS",
  "Git",
  "Go"
];

export const availabilityOptions = [
  "Live",
  "Source Available", 
  "In Development"
];

export const typeOptions = [
  "3D Interactive",
  "AI/ML",
  "Systems",
  "Web App",
  "API",
  "Library"
];

export const categoryOptions = [
  "Spline 3D",
  "Medical AI",
  "Kernel Work", 
  "Web Applications"
];
