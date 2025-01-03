import "../styles/sectionCard.css";

export default function SectionCard({
  editing,
  style = null,
  form = null,
  onClick = null,
  showButton = true,
  children,
}) {
  return (
    <div className="section-card" style={style}>
      {showButton && (
        <button type="submit" form={form} onClick={onClick}>
          {editing ? "Cancel" : "Edit"}
        </button>
      )}
      {children}
    </div>
  );
}
