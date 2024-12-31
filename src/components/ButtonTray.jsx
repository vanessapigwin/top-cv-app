export default function ButtonTray ({ editing, children }) {
    return editing && (
        <div className="button-tray">
          {children}
        </div>     
    );
}