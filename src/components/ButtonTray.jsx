export default function ButtonTray({ visible = true, children }) {
  return visible && <div className="button-tray">{children}</div>;
}
