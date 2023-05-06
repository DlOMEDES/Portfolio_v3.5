import styles from "@/styles/sectionIntro.module.scss";

export default function SectionIntro({ title, styleClass }) {
  return (
    <div className={styles[styleClass]}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
