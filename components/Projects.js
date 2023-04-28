import styles from "@/styles/projects.module.scss";
import SectionIntro from "@/components/SectionIntro";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <SectionIntro title="Projects" styleClass="projects" />
    </section>
  );
}
