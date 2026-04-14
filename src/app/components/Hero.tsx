import heroPhoto from "../assets/hero-photo.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-48 pb-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1
                className="text-[56px] leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  animationDelay: "100ms",
                }}
              >
                Yakov Varenik
              </h1>
              <p
                className="text-[24px] text-[#6F6B63] leading-[1.4]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  animationDelay: "200ms",
                }}
              >
                Fullstack Developer
              </p>
            </div>

            <p
              className="text-[17px] text-[#6F6B63] leading-relaxed max-w-[520px]"
              style={{ animationDelay: "300ms" }}
            >
              Building fast and reliable applications — from mobile interfaces
              to backend architecture
            </p>

            <div
              className="flex gap-4 pt-4"
              style={{ animationDelay: "400ms" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-[#C8A97E] text-white rounded-[20px] hover:bg-[#B8996E] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(200,169,126,0.25)] hover:-translate-y-0.5"
                style={{ fontWeight: 500 }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-white text-[#2B2B2B] rounded-[20px] hover:bg-[#fafafa] transition-all duration-300 shadow-[0_1px_3px_rgba(43,43,43,0.08)] hover:shadow-[0_4px_16px_rgba(43,43,43,0.12)] hover:-translate-y-0.5"
                style={{ fontWeight: 500 }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right column */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative w-full max-w-[420px] aspect-[3/4] bg-white rounded-[24px] shadow-[0_8px_32px_rgba(43,43,43,0.08)] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={heroPhoto}
                alt="Yakov Varenik"
                className="h-full w-full object-contain object-bottom"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
