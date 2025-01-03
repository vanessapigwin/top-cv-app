import "../styles/sectionCard.css";

export default function SectionCard({
  editing,
  style = null,
  form = null,
  onClick = null,
  children,
}) {
  return (
    <div className="section-card" style={style}>
      <button type="submit" form={form} onClick={onClick}>
        {editing ? "Cancel" : "Edit"}
      </button>
      {children}
    </div>
  );
}
