import SectionIntro from "@/components/SectionIntro";

export default function Services() {
  return (
    <section className="services secmargin">
      <SectionIntro
        title="Services"
        titlePropClass="servicesTitle"
        shapeClass="servicesPropShape"
        subtitle="What I do"
      />

      <div className="services_box">
        <h4>
          Responsive Web Design <span>Currating design assets</span>
        </h4>
        <p>
          I am responsible for aligning and curating assets to fit perfectly in
          any screen size. Slicing and implenting pixel perfect designs for
          websites and wep apps.
        </p>
      </div>
      <div className="services_box">
        <h4>
          Web Development <span>From idea to deployment</span>
        </h4>
        <p>
          Using HTML, Css and JavaScript to building beautiful websites and
          applications. Debugging, updating and adding new functionalities are
          all part my development process.
        </p>
      </div>
      <div className="services_box">
        <h4>
          Support, SEO & Analytics <span>Maintainable and Optimized</span>
        </h4>
        <p>
          User experience and perfomance are top priorities to make sure users
          stay connected and keep coming back.
        </p>
      </div>
    </section>
  );
}
