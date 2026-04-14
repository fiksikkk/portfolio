export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-8 bg-white border-t border-[#2B2B2B]/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div
              className="text-[20px] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              YV.
            </div>
            <div className="w-1 h-1 rounded-full bg-[#C8A97E]" />
            <div className="text-[14px] text-[#6F6B63]">
              Fullstack Developer
            </div>
          </div>

          <div className="text-[14px] text-[#6F6B63]">
            © {currentYear} Yakov Varenik. Crafted with care.
          </div>
        </div>
      </div>
    </footer>
  );
}
