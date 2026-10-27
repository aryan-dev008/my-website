export const personalData = {
  name: "Aryan Dangwal",
  brand: "Aryan.dev",
  title: "Backend Developer & Python Specialist",
  tagline: "Building scalable backend architectures, optimized database schemas, and clean code solutions.",
  status: "Available for Internships & Projects",
  location: "Dehradun, Uttarakhand, India",
  email: "aryandangwal06@gmail.com",
  github: "https://github.com/aryan-dev008",
  linkedin: "https://linkedin.com/in/aryan-dev008",
  livePortfolio: "https://aryan-dev008.github.io/my-website/",
  avatar: "./me.jpg",
  degree: "B.Tech in Computer Science & Engineering (Core)",
  bio: "I am an aspiring backend developer and B.Tech CSE (Core) student with a deep passion for writing clean, efficient code and constructing powerful database architectures. My technical focal points center around robust logic building, relational database optimization, and structured data environments.",
  pillars: [
    {
      label: "Academics",
      description: "Pursuing Core Computer Science & Engineering principles (DSA, OS, DBMS, System Design, Computer Networks)."
    },
    {
      label: "Backend Engineering",
      description: "Building robust REST APIs, secure microservices, and optimizing relational databases with clean OOP patterns."
    },
    {
      label: "Data Science Exploration",
      description: "Designing data pipelines, performing statistical analysis, and implementing fundamental ML models with Pandas and NumPy."
    }
  ]
};

export const stats = [
  { value: "B.Tech", label: "CSE Core", detail: "Dehradun, India" },
  { value: "Python", label: "Core & OOP", detail: "Logic & Design Patterns" },
  { value: "MySQL", label: "Relational DB", detail: "Schema & Query Optimization" },
  { value: "Clean Code", label: "Architecture", detail: "SOLID & Modular Systems" }
];

export const coreExpertise = [
  {
    id: "backend-logic",
    title: "Backend Logic & Systems",
    icon: "code",
    subtitle: "Python • OOP • Algorithms",
    description: "Writing highly efficient, structured scripts utilizing object-oriented programming methodologies to handle complex computations, data transformation, and strict validation layers.",
    highlights: ["Object-Oriented Architecture", "Algorithmic Efficiency", "Defensive Error Handling", "Modular Design"]
  },
  {
    id: "database-design",
    title: "Database Architecture",
    icon: "database",
    subtitle: "MySQL • PostgreSQL • Schema Design",
    description: "Architecting relational database environments with structured relationships, handling complex multi-table joins, normalization, and indexing strategies to optimize query response times.",
    highlights: ["Relational Integrity", "Query Optimization", "Schema Normalization", "CRUD Systems"]
  },
  {
    id: "clean-architecture",
    title: "Clean Code Architecture",
    icon: "layers",
    subtitle: "Maintainable • Scalable • Readable",
    description: "Structuring software solutions following clean design principles. Focusing on separation of concerns, testability, predictable data flow, and readable documentation.",
    highlights: ["SOLID Principles", "Reusable Components", "Comprehensive Documentation", "Extensibility"]
  },
  {
    id: "scalable-engineering",
    title: "Scalable Logic Engineering",
    icon: "cpu",
    subtitle: "APIs • Microservices • Automation",
    description: "Designing backend workflows and automated pipelines capable of handling sustained workloads without performance degradation, preparing for distributed enterprise scale.",
    highlights: ["API Integration", "Process Automation", "Pipeline Scalability", "System Modeling"]
  }
];

export const skillCategories = [
  {
    title: "Core Languages",
    icon: "terminal",
    skills: [
      { name: "Python", level: "Advanced", badge: "Primary", color: "#3b82f6" },
      { name: "SQL", level: "Proficient", badge: "Relational", color: "#f59e0b" },
      { name: "JavaScript", level: "Intermediate", badge: "ES6+", color: "#eab308" },
      { name: "HTML5 & CSS3", level: "Proficient", badge: "Responsive", color: "#ec4899" }
    ]
  },
  {
    title: "Backend Frameworks",
    icon: "server",
    skills: [
      { name: "Django", level: "Exploring", badge: "Framework", color: "#10b981" },
      { name: "Flask", level: "Proficient", badge: "Micro-framework", color: "#64748b" },
      { name: "FastAPI", level: "Intermediate", badge: "Async REST", color: "#06b6d4" },
      { name: "REST APIs", level: "Proficient", badge: "Architecture", color: "#8b5cf6" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MySQL", level: "Proficient", badge: "Relational", color: "#3b82f6" },
      { name: "PostgreSQL", level: "Intermediate", badge: "Enterprise SQL", color: "#6366f1" },
      { name: "MongoDB", level: "Familiar", badge: "NoSQL", color: "#22c55e" },
      { name: "Query Optimization", level: "Applied", badge: "Performance", color: "#f97316" }
    ]
  },
  {
    title: "Data Science & Tools",
    icon: "barChart",
    skills: [
      { name: "Pandas", level: "Intermediate", badge: "DataFrames", color: "#a855f7" },
      { name: "NumPy", level: "Intermediate", badge: "Matrices", color: "#38bdf8" },
      { name: "Scikit-learn", level: "Exploring", badge: "ML Models", color: "#f43f5e" },
      { name: "Docker & Linux", level: "Intermediate", badge: "DevOps", color: "#0ea5e9" },
      { name: "Git & GitHub", level: "Proficient", badge: "VCS", color: "#f97316" }
    ]
  }
];

export const projectsData = [
  {
    id: "password-generator",
    title: "Secure Password Generator",
    tagline: "Customizable CLI Security Tool with Strict Pool Validation",
    category: "Python Tool",
    description: "A robust command-line password generator built with Python's standard library (`random`, `string`). Guarantees at least one character from each selected pool, validates user inputs with try/except blocks, supports dynamic lengths between 8 to 64 characters, and features toggleable character sets.",
    tags: ["Python 3", "CLI", "Standard Library", "Input Validation", "Security"],
    icon: "key",
    image: null,
    githubUrl: "https://github.com/aryan-dev008/Password-Genarator",
    liveUrl: null,
    hasInteractiveDemo: true,
    codeSnippet: `import random, string

def generate_password(length=16, use_nums=True, use_syms=True):
    pools = [string.ascii_letters]
    if use_nums: pools.append(string.digits)
    if use_syms: pools.append("!@#$%^&*()_+-=[]{}|;:,.<>?")
    
    password = [random.choice(p) for p in pools]
    all_chars = ''.join(pools)
    password += [random.choice(all_chars) for _ in range(length - len(password))]
    random.shuffle(password)
    return ''.join(password)`
  },
  {
    id: "snake-game",
    title: "Classic Snake Game with Pygame",
    tagline: "OOP-Driven Arcade Game with Dynamic Rendering & High-Score Tracking",
    category: "Game Dev & OOP",
    description: "An interactive arcade Snake game developed completely from scratch in Python using Pygame. Implements clean object-oriented class architecture, anti-180-degree reverse validation, gradient body coloring, pulsing food animations, session high score persistence, and dual keyboard control schemas (WASD and Arrow keys).",
    tags: ["Python", "Pygame", "OOP", "Game Logic", "Animation"],
    icon: "gamepad",
    image: null,
    githubUrl: "https://github.com/aryan-dev008/snake-game-",
    liveUrl: null,
    hasInteractiveDemo: true,
    isSnakeGame: true,
    stats: "Smooth 60 FPS • Session High Score • Dual Control Schema"
  },
  {
    id: "db-management-app",
    title: "Database Management System",
    tagline: "Full OOP Relational Architecture with Normalized Schemas",
    category: "Backend & SQL",
    description: "Comprehensive backend database architecture featuring normalized table relationships, automated foreign-key validation, parameterized SQL queries against SQL injection, and CRUD operations for transactional workflows.",
    tags: ["Python", "MySQL", "OOP", "Schema Design", "Data Integrity"],
    icon: "database",
    image: "./images/projects/nikhil-KO4io-eCAXA-unsplash.jpg",
    githubUrl: "https://github.com/aryan-dev008",
    liveUrl: null,
    hasInteractiveDemo: false,
    stats: "3NF Normalization • Parameterized Queries • ACID Compliant"
  },
  {
    id: "application-control-core",
    title: "Application Control Core",
    tagline: "Modular Backend Logic Engine & Validation Middleware",
    category: "System Logic",
    description: "Scalable backend logic engine built around modular architecture principles. Features layered validation, custom exception hierarchies, defensive runtime assertions, and isolated execution modules.",
    tags: ["Python", "Logic Engineering", "OOP", "Clean Code"],
    icon: "cpu",
    image: "./images/projects/the-5th-IQYR7N67dhM-unsplash.jpg",
    githubUrl: "https://github.com/aryan-dev008",
    liveUrl: null,
    hasInteractiveDemo: false,
    stats: "Layered Middleware • Custom Exceptions • Decoupled Modules"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Showcase",
    tagline: "Modern WebGL-Enhanced Interactive Developer Showcase",
    category: "Web & 3D",
    description: "Aryan's official developer portfolio, recreated with premium 3D WebGL animations, kinetic perspective cards, real-time interactive terminal simulation, and fully responsive dark cosmic aesthetics.",
    tags: ["React", "Three.js", "Tailwind CSS", "WebGL", "Vite"],
    icon: "globe",
    image: "./images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg",
    githubUrl: "https://github.com/aryan-dev008/my-website",
    liveUrl: "https://aryan-dev008.github.io/my-website/",
    hasInteractiveDemo: false,
    stats: "WebGL 3D Core • Responsive • Production Grade"
  }
];

export const roadmapData = [
  {
    phase: "Phase 1: Foundations & Backend",
    status: "Active / Current Focus",
    timeline: "Ongoing",
    isCurrent: true,
    description: "Solidifying core Computer Science foundations, algorithmic mastery, and production-grade backend engineering.",
    milestones: [
      "Data Structures & Algorithms (Trees, Graphs, DP)",
      "Advanced Python (OOP, Decorators, Generators, Metaclasses)",
      "Relational Database Optimization & Complex SQL",
      "Building & Deploying Scalable Backend Micro-projects"
    ]
  },
  {
    phase: "Phase 2: Data Engineering & Analytics",
    status: "Upcoming Roadmap",
    timeline: "Next 3-6 Months",
    isCurrent: false,
    description: "Expanding into large-scale data engineering workflows, robust data pipelines, and analytical processing.",
    milestones: [
      "Mathematical Foundations & Statistical Modeling",
      "Advanced Pandas, NumPy & High-volume Data Manipulation",
      "Data Pipeline Engineering (ETL workflows, Data Cleansing)",
      "Interactive Visualization & Analytical Dashboards"
    ]
  },
  {
    phase: "Phase 3: Machine Learning Frameworks",
    status: "Future Horizon",
    timeline: "6-12 Months",
    isCurrent: false,
    description: "Deploying intelligent prediction engines and bridging backend systems with production ML models.",
    milestones: [
      "Predictive Modeling & Scikit-learn Pipelines",
      "Core Machine Learning Algorithms (Regression, Classification, Clustering)",
      "Model Serving & REST API Inferencing",
      "Academic Research & Technical Open-source Collaborations"
    ]
  }
];
