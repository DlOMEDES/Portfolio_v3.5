import styles from "@/styles/about.module.scss";
import SectionIntro from "@/components/SectionIntro";

export default function About() {
  return (
    <section className={styles.about}>
      <SectionIntro title="about" styleClass="about" />
    </section>
  );
}
