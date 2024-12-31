import { useState } from "react";
import { experiences } from "../data";
import "../styles/Experience.css";
import SectionCard from "./SectionCard";
import ButtonTray from "./ButtonTray";

function Experience({ exp, editing }) {
  return (
    <>
      <div className="title-button-tray">
        <h4>
          {exp.title}, {exp.employer}, ({exp.start} - {exp.end})
        </h4>

        <ButtonTray editing={editing}>
          <button>Edit</button>
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

export default function WorkExperience() {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
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
  }

  function handleFormCancel() {
    setAdding(false);
    setEditing(true);
  }

  function addExperience() {}

  function delExperience() {}

  function editExperience() {}

  return (
    <SectionCard editing={editing} onClick={handleChange}>
      <div className="title-button-tray">
        <h2>Professional Experience</h2>

        <ButtonTray editing={editing}>
          <button onClick={showForm}>Add</button>
        </ButtonTray>
      </div>

      {adding && (
        <form onSubmit={handleSubmit}>
          <input placeholder="Job Title"></input>
          <button type="submit">Add</button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </form>
      )}

      {expList.map((exp) => (
        <Experience
          exp={exp}
          key={exp.key}
          editing={editing}
          handleEdit={editExperience}
          handleDelete={delExperience}
        />
      ))}
    </SectionCard>
  );
}
