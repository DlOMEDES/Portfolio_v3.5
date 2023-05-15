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
          I'm Diomedes Lajara, a Web Developer specializing in Frontend User
          Interfaces.
        </h4>

        <p>
          I am a freelancer based in South Florida and I have the ability to
          build beautiful websites that are fast and effective. I taught myself
          web design and development to solve business problems creatively.
          Using web technologies, I translate ideas and design concepts into
          fully functional web products.
        </p>
      </div>

      <div className="aboutInfo">
        <p>
          <b>Name:</b> Diomedes Lajara
        </p>
        <p>
          <b>Email:</b> diomedes.lajara@gmail.com
        </p>
        <p>
          <b>Location:</b> Fort Lauderdale, Florida
        </p>
        <br />

        <div className="aboutInfo_buttons">
          <a href="/resume.pdf" target="_blank">
            View Resume
          </a>
          <a href="/#work">My Work</a>
        </div>
      </div>
    </section>
  );
}
