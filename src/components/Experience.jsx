import { useState } from "react";
import { createPortal } from "react-dom";
import { experiences } from "../data";
import "../styles/Experience.css";
import SectionCard from "./SectionCard";
import ButtonTray from "./ButtonTray";

function Experience({ exp, editing, handleEdit }) {

  function callEditForm(e) {
    handleEdit(e);
  }

  return (
    <>
      <div className="title-button-tray">
        <h4>
          {exp.title}, {exp.employer}, ({exp.start} - {exp.end})
        </h4>

        <ButtonTray visible={editing}>
          <button onClick={callEditForm}>Edit</button>
          <button>Delete</button>
        </ButtonTray>
      </div>
      <ul>
        {exp.accomplishments.map((a) => (
          <li key={a + crypto.randomUUID()}>{a}</li>
        ))}
      </ul>
    </>
  );
}

function ExpForm({ title, handleSubmit, handleFormCancel }) {
  return (
    <div className="form-modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h3>{title}</h3>
        <input placeholder="Job Title"></input>
        <input placeholder="Employer"></input>
        <input placeholder="Start Date"></input>
        <input placeholder="End Date"></input>
        <input placeholder="Accomplishment 1"></input>
        <input placeholder="Accomplishment 2"></input>
        <input placeholder="Accomplishment 3"></input>
        <ButtonTray>
          <button type="submit">Save</button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </ButtonTray>
      </form>
    </div>
  );
}

export default function WorkExperience() {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editIndex, setEditIndex] =useState(null)
  const [expList, setExpList] = useState(experiences);

  function handleChange() {
    setEditing(!editing);
    setAdding(false);
  }

  function showForm(e) {
    setAdding(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAdding(false);
    setEditing(false);
    setEditIndex(null);
  }

  function handleFormCancel() {
    setAdding(false);
    setEditing(true);
    setEditIndex(null)
  }

  function addExperience() {}

  function delExperience() {}

  function editExperience(e, key) {
    setEditIndex(key)
  }

  return (
    <SectionCard editing={editing} onClick={handleChange}>
      <div className="title-button-tray">
        <h2>Professional Experience</h2>

        <ButtonTray visible={editing}>
          <button onClick={showForm}>Add</button>
        </ButtonTray>
      </div>

      {adding &&
        createPortal(
          <ExpForm
            title="Add Experience"
            handleSubmit={handleSubmit}
            handleFormCancel={handleFormCancel}
          />,
          document.body,
        )
      }

      {
        editIndex && 
        createPortal(
          <ExpForm
            title="Edit Experience"
            handleSubmit={handleSubmit}
            handleFormCancel={handleFormCancel}
          />,
          document.body,
        )
      }      

      {expList.map((exp) => (
        <Experience
          exp={exp}
          key={exp.key}
          editing={editing}
          handleEdit={(e) => editExperience(e, exp.key)}
          handleDelete={delExperience}
        />
      ))}
    </SectionCard>
  );
}
