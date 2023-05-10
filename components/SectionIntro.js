export default function SectionIntro({
  title,
  titlePropClass,
  shapeClass,
  subPropClass,
  subtitle,
}) {
  return (
    <div className="titleContainer">
      <h2 className={titlePropClass}>{title}</h2>
      <span className={subPropClass}>{subtitle}</span>
      {/* <div className={shapeClass}>
      </div> */}
    </div>
  );
}
