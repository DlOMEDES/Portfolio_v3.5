
export default function SectionIntro({title, titlePropClass, shapeClass }) {
  return (
    <div className="titleContainer">
      <h2 className={titlePropClass}>{title}</h2>
      <div className={shapeClass}>
      </div>
    </div>
  );
}
