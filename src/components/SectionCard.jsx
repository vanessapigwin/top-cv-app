import "../styles/sectionCard.css";

export default function SectionCard({
  style = null,
  editing,
  onclick,
  children,
}) {
  return (
    <div className="section-card" style={style}>
      <button onClick={onclick}>{editing ? "Save" : "Edit"}</button>
      {children}
    </div>
  );
}
