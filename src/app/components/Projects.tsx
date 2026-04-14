export default function Projects() {
  const projects = [
    {
      name: "Muffins",
      description: `Developed and maintained a B2B medical benefits platform across web, mobile, and backend.
                    Refactored legacy code and wrote tests (Jest, Detox) to improve performance and stability.
                    Used AI tools and prompt engineering to streamline development and ensure reliable results.`,
      tags: ["React", "Node.js", "GraphQL", "AI Integration", "PostgreSQL"],
      highlight: "B2B Platform",
    },
    {
      name: "JetRuby Mobile",
      description: `Built a fitness and health mobile app from scratch using React Native.
                    Implemented UI from designs, integrated REST APIs, and managed state and navigation.
                    Optimized performance and stability, and contributed to code reviews and planning.`,
      tags: ["React Native", "TypeScript", "Redux", "Detox", "Performance"],
      highlight: "Mobile App",
    },
  ];

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2
            className="text-[14px] uppercase tracking-[0.15em] text-[#C8A97E] mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Featured Projects
          </h2>
          <p className="text-[17px] text-[#6F6B63] max-w-[600px]">
            Selected work showcasing expertise in fullstack development, mobile
            architecture, and performance optimization.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-white rounded-[24px] p-12 shadow-[0_2px_16px_rgba(43,43,43,0.06)] hover:shadow-[0_12px_48px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8A97E]/5 rounded-full blur-3xl transform translate-x-24 -translate-y-24 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className="inline-block px-4 py-1.5 bg-[#C8A97E]/10 text-[#C8A97E] rounded-full text-[13px] mb-4"
                      style={{ fontWeight: 600 }}
                    >
                      {project.highlight}
                    </div>
                    <h3
                      className="text-[32px] mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                    >
                      {project.name}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#F5F1E8] group-hover:bg-[#C8A97E] flex items-center justify-center transition-all duration-500">
                    <svg
                      className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-[17px] text-[#6F6B63] leading-relaxed mb-8 max-w-[800px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[#F5F1E8] text-[#2B2B2B] rounded-[12px] text-[14px] hover:bg-[#C8A97E]/10 transition-colors duration-300"
                      style={{ fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
