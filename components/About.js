import SectionIntro from "@/components/SectionIntro";

export default function About() {
  return (
    <section className="about secmargin">
      <SectionIntro
        title="About me"
        titlePropClass="aboutTitle"
        shapeClass="aboutPropShape"
        subtitle="Get to know me"
      />
      <img className="myPhoto" src="/me.png" alt="" />

      <div className="aboutText">
        <h4>
          <span>Who am I?</span>
          I'm Diomedes Lajara, a Frontend Developer. I build User Interfaces
          using ReactJS and WordPress.
        </h4>

        <p>
          I am a freelancer based in South Florida and I have been building
          custom websites for years. I taught myself web design and development
          to solve business problems creatively. Using web technologies, I
          translate ideas and design concepts into fully functional web
          products. From Email Templates to websites including WordPress themes
          and interfaces for React applications.
        </p>
      </div>

      <div className="aboutCta">
        <a href="/resume.pdf" target="_blank">
          View Resume
        </a>
        <a href="/#work">My Work</a>
      </div>
    </section>
  );
}
