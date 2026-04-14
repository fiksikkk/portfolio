export default function Contact() {
  const contactMethods = [
    {
      name: "Telegram",
      handle: "@fiksik_k",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
      ),
      link: "https://t.me/fiksik_k",
    },
    {
      name: "Email",
      handle: "yakov.varenik@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "mailto:yakov.varenik@gmail.com",
    },
    {
      name: "GitHub",
      handle: "github.com/Fiksikkk",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/Fiksikkk",
    },
  ];

  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className="text-[14px] uppercase tracking-[0.15em] text-[#C8A97E] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Get in Touch
          </h2>

          <h3
            className="text-[40px] leading-[1.2] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Let's work together
          </h3>

          <p className="text-[19px] text-[#6F6B63] leading-relaxed mb-16">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-8 bg-white rounded-[24px] shadow-[0_2px_12px_rgba(43,43,43,0.06)] hover:shadow-[0_8px_32px_rgba(200,169,126,0.2)] hover:bg-[#C8A97E] transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-[16px] bg-[#F5F1E8] group-hover:bg-white/20 text-[#C8A97E] group-hover:text-white flex items-center justify-center transition-all duration-500">
                    {method.icon}
                  </div>

                  <div className="text-left">
                    <div
                      className="text-[20px] mb-1 text-[#2B2B2B] group-hover:text-white transition-colors duration-500"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                    >
                      {method.name}
                    </div>
                    <div className="text-[15px] text-[#6F6B63] group-hover:text-white/80 transition-colors duration-500">
                      {method.handle}
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#F5F1E8] group-hover:bg-white/20 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1">
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
