import { useState } from "react";
import { experiences } from "../data";
import "../styles/Experience.css";
import SectionCard from "./SectionCard";

function Experience({ exp, editing }) {
  return (
    <>
      <div className="title-button-tray">
        <h4>
          {exp.title}, {exp.employer}, ({exp.start} - {exp.end})
        </h4>
        {editing ? (
          <div className="button-tray">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ) : null}
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
  const [expList, setExpList] = useState(experiences);

  function handleChange(e) {
    setEditing(!editing);
  }

  function addExperience() {}

  function delExperience() {}

  function editExperience() {}

  return (
    <SectionCard editing={editing} onClick={handleChange}>
      <div className="title-button-tray">
        <h2>Professional Experience</h2>
        {editing ? (
          <div className="button-tray">
            <button>Add</button>
          </div>
        ) : null}
      </div>
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
