export default function About() {
  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto">
          <h2
            className="text-[14px] uppercase tracking-[0.15em] text-[#C8A97E] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            About
          </h2>

          <p className="text-[21px] leading-[1.7] text-[#2B2B2B]">
            I'm a fullstack developer specializing in building high-performance mobile and web applications.
            With deep expertise in React Native and modern backend technologies, I create seamless user experiences
            backed by robust, scalable architecture.
          </p>

          <p className="text-[21px] leading-[1.7] text-[#2B2B2B] mt-8">
            I leverage AI tools to accelerate development workflows, automate repetitive tasks, and enhance
            code quality — allowing me to focus on solving complex problems and delivering exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}
