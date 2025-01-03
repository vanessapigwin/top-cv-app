import { useState } from "react";
import { education } from "../data";
import ButtonTray from "./ButtonTray";
import SectionCard from "./SectionCard";
import ModalForm from "./Form";

function EducationEntry({ ed, editing, handleEdit, handleDelete }) {
  return (
    <li>
      <div>
        <span>
          {ed.degree}, {ed.school} ({ed.yearGraduated})
        </span>
        <ButtonTray visible={editing}>
          <button>Edit</button>
          <button>Delete</button>
        </ButtonTray>
      </div>
    </li>
  );
}

export default function Education() {
  const [editing, setEditing] = useState(false);
  const [isAdding, setIsAdding] =useState(false)
  const [educList, setEducList] = useState(education);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleChange() {
    setEditing(!editing);
    setIsAdding(false)
  }

  function showForm () {
    setIsAdding(true)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    setEditing(false);
    setIsAdding(false);
    setSelectedIndex(null)
  }

  function handleFormCancel() {
    setEditing(true);
    setIsAdding(false);
    setSelectedIndex(null)
  }

  function handleAdd(e) {
    handleFormSubmit(e)
  }

  function handleEdit() {}

  function handleDelete() {}

  return (
    <SectionCard editing={editing} onClick={handleChange}>
      <div className="title-button-tray">
        <h2>Education</h2>
        <ButtonTray visible={editing}>
          <button onClick={showForm}>Add</button>
        </ButtonTray>
      </div>

      { isAdding &&
        <ModalForm handleFormSubmit={handleFormSubmit} handleFormCancel={handleFormCancel}>
          <input defaultValue='degree'></input>
        </ModalForm>     
      }

      <ul>
        {educList.map((ed) => (
          <EducationEntry
            key={ed.key}
            ed={ed}
            editing={editing}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </SectionCard>
  );
}
