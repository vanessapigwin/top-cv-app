import ButtonTray from "./ButtonTray";

export default function ModalForm({
  data = null,
  title,
  handleFormSubmit,
  handleFormCancel,
  children,
}) {
  return (
    <div className="form-modal">
      <form className="modal-content" onSubmit={handleFormSubmit}>
        <h3>{title}</h3>
        {children}
        <ButtonTray>
          <button type="submit">{data ? "Update" : "Add"}</button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </ButtonTray>
      </form>
    </div>
  );
}
