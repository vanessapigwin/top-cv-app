import { useState } from "react";
import { createPortal } from "react-dom";
import { experiences } from "../data";
import extractFormData from "../utils/helpers";
import "../styles/Experience.css";
import SectionCard from "./SectionCard";
import ButtonTray from "./ButtonTray";

function Experience({ exp, editing, handleEdit, handleDelete }) {
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
          <button onClick={handleDelete}>Delete</button>
        </ButtonTray>
      </div>
      <ul>
        {exp.accomplishments.map(
          (a) => a && <li key={a + crypto.randomUUID()}>{a}</li>,
        )}
      </ul>
    </>
  );
}

function ExpForm({ title, exp = null, handleFormSubmit, handleFormCancel }) {
  return (
    <div className="form-modal">
      <form className="modal-content" onSubmit={handleFormSubmit}>
        <h3>{title}</h3>
        <input
          name="title"
          placeholder="Job Title"
          defaultValue={exp ? exp.title : null}
        ></input>
        <input
          name="employer"
          placeholder="Employer"
          defaultValue={exp ? exp.employer : null}
        ></input>
        <input
          name="start"
          placeholder="Start Date"
          defaultValue={exp ? exp.start : null}
        ></input>
        <input
          name="end"
          placeholder="End Date"
          defaultValue={exp ? exp.end : null}
        ></input>
        <input
          name="acc-1"
          placeholder="Accomplishment 1"
          defaultValue={exp ? exp.accomplishments[0] : null}
        ></input>
        <input
          name="acc-2"
          placeholder="Accomplishment 2"
          defaultValue={exp ? exp.accomplishments[1] : null}
        ></input>
        <input
          name="acc-3"
          placeholder="Accomplishment 3"
          defaultValue={exp ? exp.accomplishments[2] : null}
        ></input>
        <ButtonTray>
          <button type="submit" onClick={handleFormSubmit}>
            {exp ? "Update" : "Add"}
          </button>
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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [expList, setExpList] = useState(experiences);

  function handleChange() {
    setEditing(!editing);
    setAdding(false);
  }

  function showForm(e) {
    setAdding(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setAdding(false);
    setEditing(false);
    setSelectedIndex(null);
  }

  function handleFormCancel() {
    setAdding(false);
    setEditing(true);
    setSelectedIndex(null);
  }

  function createExp(data) {
    const accKeys = ["acc-1", "acc-2", "acc-3"];
    const accomplishments = [];
    accKeys.forEach((key) => {
      accomplishments.push(data[key]);
      delete data[key];
    });
    data.accomplishments = accomplishments;
    return data;
  }

  function addExperience(e) {
    handleFormSubmit(e);
    const form = e.target.form;
    if (form) {
      const data = extractFormData(form);
      data.key = crypto.randomUUID();
      const newExp = createExp(data);

      if (!newExp.title || !newExp.employer || !newExp.start || !newExp.end) {
        alert("Title, employer, start and end dates required");
      } else {
        const updatedExpList = [newExp, ...expList];
        setExpList(updatedExpList);
      }
    }
  }

  function delExperience(e, key) {
    handleFormSubmit(e);
    const updatedExpList = expList.filter((exp) => exp.key !== key);
    setExpList(updatedExpList);
  }

  function editExperience(e) {
    handleFormSubmit(e);
    const form = e.target.form;
    if (form) {
      const data = extractFormData(form);
      const newExp = createExp(data);

      if (!newExp.title || !newExp.employer || !newExp.start || !newExp.end) {
        alert("Title, employer, start and end dates required");
      } else {
        const updatedExpList = [];
        expList.forEach((exp) => {
          exp.key === selectedIndex
            ? updatedExpList.push(newExp)
            : updatedExpList.push(exp);
        });
        setExpList(updatedExpList);
      }
    }
  }

  const entryFocused = expList.find((exp) => exp.key === selectedIndex);

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
            handleFormSubmit={addExperience}
            handleFormCancel={handleFormCancel}
          />,
          document.body,
        )}

      {selectedIndex !== null &&
        createPortal(
          <ExpForm
            title="Edit Experience"
            exp={entryFocused}
            handleFormSubmit={editExperience}
            handleFormCancel={handleFormCancel}
          />,
          document.body,
        )}

      {expList.map((exp) => (
        <Experience
          exp={exp}
          key={exp.key}
          editing={editing}
          handleEdit={() => setSelectedIndex(exp.key)}
          handleDelete={(e) => delExperience(e, exp.key)}
        />
      ))}
    </SectionCard>
  );
}
