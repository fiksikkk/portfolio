export const enTranslation = {
  seo: {
    title: "Yakov Varenik | Fullstack Developer",
    description:
      "Fullstack developer portfolio: React, React Native, Node.js, mobile and web applications.",
  },
  header: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    name: "Yakov Varenik",
    role: "Fullstack Developer",
    description:
      "Building fast and reliable applications - from mobile interfaces to backend architecture",
    primaryButton: "View Projects",
    secondaryButton: "Contact",
    imageAlt: "Yakov Varenik",
  },
  about: {
    title: "About",
    paragraph1:
      "I'm a fullstack developer specializing in building high-performance mobile and web applications. With deep expertise in React Native and modern backend technologies, I create seamless user experiences backed by robust, scalable architecture.",
    paragraph2:
      "I leverage AI tools to accelerate development workflows, automate repetitive tasks, and enhance code quality - allowing me to focus on solving complex problems and delivering exceptional results.",
  },
  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        title: "Frontend",
        skills: ["React", "React Native", "TypeScript"],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Nest.js", "GraphQL"],
      },
      {
        title: "State & Data",
        skills: ["Redux", "Effector", "REST APIs"],
      },
      {
        title: "Testing",
        skills: ["Jest", "Detox", "Unit & E2E"],
      },
      {
        title: "Dev Tools",
        skills: ["Sentry", "CI/CD", "Git"],
      },
      {
        title: "Architecture",
        skills: ["Clean Code", "Design Patterns", "Feature Sliced Design"],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description:
      "Selected work showcasing expertise in fullstack development, mobile architecture, and performance optimization.",
    modal: {
      closeLabel: "Close modal",
      placeholder: "Detailed project description will be added soon. This section will include goals, architecture decisions, stack, and key outcomes.",
    },
    items: [
      {
        name: "Muffins",
        description:
          "Developed and maintained a B2B medical benefits platform across web, mobile, and backend. Refactored legacy code and wrote tests (Jest, Detox) to improve performance and stability. Used AI tools and prompt engineering to streamline development and ensure reliable results.",
        details: [
          "Development and maintenance of a B2B platform for managing medical benefits",
          "",
          "- Developed features for web, mobile applications, and backend",
          "- Refactored legacy code, improving performance and maintainability",
          "- Wrote unit and end-to-end tests (Jest, Detox), increasing release stability",
          "- Used AI tools for code generation, refactoring, and testing, establishing an LLM -> validation -> refinement pipeline",
          "- Applied prompt engineering techniques (structured prompts, task decomposition) to improve output quality and accuracy",
          "- Validated AI-generated outputs (logic, edge cases, performance), reducing risks of errors and hallucinations",
          "- Participated in code reviews, planning, and task decomposition",
          "- Collaborated with designers and stakeholders",
          "",
          "<strong>Stack</strong>: TypeScript, React, React Native, Node.js, Effector, Redux, GraphQL",
        ].join("\n"),
        tags: ["React", "Node.js", "GraphQL", "AI Integration", "PostgreSQL"],
        highlight: "B2B Platform",
      },
      {
        name: "JetRuby Agency",
        description:
          "Built a fitness and health mobile app from scratch using React Native. Implemented UI from designs, integrated REST APIs, and managed state and navigation. Optimized performance and stability, and contributed to code reviews and planning.",
        details: [
          "Mobile application for fitness and health",
          "",
          "- Developed the application from scratch using React Native",
          "- Implemented UI based on design mockups, supported light/dark themes",
          "- Integrated REST API (posts, comments, profiles, notifications)",
          "- Managed application state and data caching",
          "- Set up navigation and contributed to architecture design",
          "- Optimized application performance and stability",
          "- Participated in code reviews and task planning",
          "",
          "<strong>Stack</strong>: React Native, TypeScript, Redux, Context API, REST API, Git, CI/CD",
        ].join("\n"),
        tags: ["React Native", "TypeScript", "Redux", "Detox", "Performance"],
        highlight: "Mobile App",
      },
    ],
  },
  ai: {
    subtitle: "AI-Enhanced Development",
    title: "Building smarter, faster",
    description:
      "I integrate AI tools throughout the development process to enhance productivity, improve code quality, and solve complex problems more efficiently. This allows me to deliver exceptional results while maintaining high standards of craftsmanship.",
    capabilities: [
      {
        title: "Code Generation",
        description:
          "Accelerate development with AI-assisted code generation and boilerplate reduction",
      },
      {
        title: "Automation",
        description:
          "Streamline workflows through intelligent automation and tooling",
      },
      {
        title: "Code Review",
        description:
          "Enhance code quality with AI-powered analysis and suggestions",
      },
    ],
  },
  personal: {
    title: "Beyond Code",
    description:
      "When I'm not building software, I enjoy working with my hands and exploring the intersection of engineering and craftsmanship. These pursuits inform my approach to development - attention to detail, systematic thinking, and an appreciation for well-built systems.",
    interests: [
      {
        title: "Smart Home",
        description: "Building and optimizing home automation systems",
      },
      {
        title: "3D Modeling",
        description: "Creating digital designs and prototypes",
      },
      {
        title: "Woodworking",
        description: "Crafting functional objects with attention to detail",
      },
    ],
  },
  contact: {
    subtitle: "Get in Touch",
    title: "Let's work together",
    description:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.",
  },
  footer: {
    title: "Fullstack Developer",
    copyright: "Crafted with care.",
  },
} as const;
