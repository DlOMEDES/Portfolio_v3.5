import styles from "@/styles/whatIDO.module.scss";
import SectionIntro from "@/components/SectionIntro";

export default function WhatIdo() {
  return (
    <section className={styles.whatIDo}>
      <SectionIntro title="What I Do" styleClass="whatIdo" />
      <div className={styles.services}>
        <h4>
          Responsive Web Designs <span>Converting ideas into design</span>
        </h4>
        <p>
          I am responsible for slicing and implenting designs for digital web
          products. Aligning and curating design assets to fit perfectly in any
          screen size.
        </p>
      </div>
      <div className={styles.services}>
        <h4>
          Web Development <span>From idea to deployment</span>
        </h4>
        <p>
          Using HTML, Css and JavaScript to building beautiful websites and
          applications. Debugging, updating and adding new functionalities are
          all part of the development process.
        </p>
      </div>
      <div className={styles.services}>
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
