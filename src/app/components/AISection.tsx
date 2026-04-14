export default function AISection() {
  const aiCapabilities = [
    {
      title: 'Code Generation',
      description: 'Accelerate development with AI-assisted code generation and boilerplate reduction'
    },
    {
      title: 'Automation',
      description: 'Streamline workflows through intelligent automation and tooling'
    },
    {
      title: 'Code Review',
      description: 'Enhance code quality with AI-powered analysis and suggestions'
    }
  ];

  return (
    <section className="py-32 px-8 bg-gradient-to-br from-[#C8A97E]/8 via-[#F5F1E8] to-transparent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-3xl translate-x-48 translate-y-48" />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h2
            className="text-[14px] uppercase tracking-[0.15em] text-[#C8A97E] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            AI-Enhanced Development
          </h2>

          <h3
            className="text-[40px] leading-[1.2] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            Building smarter, faster
          </h3>

          <p className="text-[19px] text-[#6F6B63] leading-relaxed">
            I integrate AI tools throughout the development process to enhance productivity,
            improve code quality, and solve complex problems more efficiently. This allows me to
            deliver exceptional results while maintaining high standards of craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="bg-white/60 backdrop-blur-sm rounded-[24px] p-8 hover:bg-white hover:shadow-[0_8px_32px_rgba(200,169,126,0.15)] transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-[12px] bg-[#C8A97E]/10 flex items-center justify-center mb-5">
                <div className="w-2 h-2 rounded-full bg-[#C8A97E]" />
              </div>

              <h4
                className="text-[18px] mb-3"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
              >
                {capability.title}
              </h4>

              <p className="text-[15px] text-[#6F6B63] leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
