interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(43,43,43,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl tracking-tight hover:text-[#C8A97E] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            YV.
          </button>

          <ul className="flex items-center gap-12">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[15px] text-[#6F6B63] hover:text-[#2B2B2B] transition-colors duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-[15px] text-[#6F6B63] hover:text-[#2B2B2B] transition-colors duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[15px] text-[#6F6B63] hover:text-[#2B2B2B] transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
