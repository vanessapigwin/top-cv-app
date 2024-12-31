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

        <ButtonTray editing={editing}>
          {<button>Add</button>}
        </ButtonTray>

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
