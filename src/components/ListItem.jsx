import ButtonTray from "./ButtonTray";

export default function ListItem({ title, editing, handleEdit, handleDelete }) {
    return (
      <li>
        <div>
          <span>
            {title}
          </span>
          <ButtonTray visible={editing}>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </ButtonTray>
        </div>
      </li>
    );
  }