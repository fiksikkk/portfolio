export default function Personal() {
  const interests = [
    {
      title: 'Smart Home',
      description: 'Building and optimizing home automation systems',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: '3D Modeling',
      description: 'Creating digital designs and prototypes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Woodworking',
      description: 'Crafting functional objects with attention to detail',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto">
          <h2
            className="text-[14px] uppercase tracking-[0.15em] text-[#C8A97E] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            Beyond Code
          </h2>

          <p className="text-[21px] leading-[1.7] text-[#2B2B2B] mb-12">
            When I'm not building software, I enjoy working with my hands and exploring the intersection
            of engineering and craftsmanship. These pursuits inform my approach to development —
            attention to detail, systematic thinking, and an appreciation for well-built systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group p-6 bg-[#F5F1E8] rounded-[20px] hover:bg-[#C8A97E]/10 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-[14px] bg-white text-[#C8A97E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {interest.icon}
                </div>

                <h3
                  className="text-[17px] mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                >
                  {interest.title}
                </h3>

                <p className="text-[15px] text-[#6F6B63]">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
