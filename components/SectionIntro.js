// import styles from "@/styles/sectionIntro.module.scss";

export default function SectionIntro({ title, styleClass }) {
  return (
    <div className={styleClass}>
      <h2 className="title">{title}</h2>
    </div>
  );
}
