import { useState } from "react";
import { education } from "../data";
import ButtonTray from "./ButtonTray";
import SectionCard from "./SectionCard";
import ModalForm from "./Form";
import extractFormData from "../utils/helpers";

function EducationEntry({ ed, editing, handleEdit, handleDelete }) {
  return (
    <li>
      <div>
        <span>
          {ed.degree}, {ed.school} ({ed.yearGraduated})
        </span>
        <ButtonTray visible={editing}>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </ButtonTray>
      </div>
    </li>
  );
}

function EducForm({ title, data = null, handleFormSubmit, handleFormCancel }) {
  return (
    <ModalForm
      data={data}
      title={title}
      handleFormSubmit={handleFormSubmit}
      handleFormCancel={handleFormCancel}
    >
      <input
        name="degree"
        placeholder="Degree"
        defaultValue={data ? data.degree : null}
      ></input>
      <input
        name="school"
        placeholder="University / School"
        defaultValue={data ? data.school : null}
      ></input>
      <input
        name="yearGraduated"
        placeholder="Year Graduated"
        defaultValue={data ? data.yearGraduated : null}
      ></input>
    </ModalForm>
  );
}

export default function Education() {
  const [editing, setEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [educList, setEducList] = useState(education);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleChange() {
    setEditing(!editing);
    setIsAdding(false);
  }

  function showForm() {
    setIsAdding(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsAdding(false);
    setSelectedIndex(null);
  }

  function handleFormCancel() {
    setEditing(true);
    setIsAdding(false);
    setSelectedIndex(null);
  }

  function handleAdd(e) {
    const form = e.target;
    if (form) {
      const newEduc = extractFormData(form);
      newEduc.key = crypto.randomUUID();

      if (Object.values(newEduc).some((value) => value === "")) {
        handleFormCancel(e);
        alert("Degree, school and date graduated required");
      } else {
        setEducList([newEduc, ...educList]);
        handleFormSubmit(e);
      }
    }
  }

  function handleEdit(e) {
    const form = e.target;
    if (form) {
      const updatedEduc = extractFormData(form);
      updatedEduc.key = crypto.randomUUID();

      if (Object.values(updatedEduc).some((value) => value === "")) {
        handleFormCancel(e);
        alert("Degree, school and date graduated required");
      } else {
        const newList = [];
        educList.forEach((ed) => {
          ed.key === selectedIndex
            ? newList.push(updatedEduc)
            : newList.push(ed);
        });
        setEducList(newList);
        handleFormSubmit(e);
      }
    }
  }

  function handleDelete(key) {
    const newEducList = educList.filter((ed) => ed.key !== key);
    setEducList(newEducList);
  }

  const entryFocused = educList.find((ed) => ed.key === selectedIndex);

  return (
    <SectionCard editing={editing} onClick={handleChange}>
      <div className="title-button-tray">
        <h2>Education</h2>
        <ButtonTray visible={editing}>
          <button onClick={showForm}>Add</button>
        </ButtonTray>
      </div>

      {isAdding && (
        <EducForm
          title="Add Education"
          handleFormSubmit={handleAdd}
          handleFormCancel={handleFormCancel}
        ></EducForm>
      )}

      {selectedIndex !== null && (
        <EducForm
          title="Update Education"
          data={entryFocused}
          handleFormSubmit={handleEdit}
          handleFormCancel={handleFormCancel}
        ></EducForm>
      )}

      <ul>
        {educList.map((ed) => (
          <EducationEntry
            key={ed.key}
            ed={ed}
            editing={editing}
            handleEdit={() => setSelectedIndex(ed.key)}
            handleDelete={() => handleDelete(ed.key)}
          />
        ))}
      </ul>
    </SectionCard>
  );
}
