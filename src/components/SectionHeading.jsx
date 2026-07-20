/**
 * Reusable heading block used at the top of most sections.
 */
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
