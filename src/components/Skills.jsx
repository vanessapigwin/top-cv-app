import { useState } from "react";
import { skills } from "../data";
import SectionCard from "./SectionCard";
import ButtonTray from "./ButtonTray";

export default function Skills() {
  const [editing, setEditing] = useState(false);
  const [skillList, setSkillList] = useState(skills);

  function handleEdit() {
    setEditing(!editing);
  }

  return (
    <SectionCard editing={editing} onClick={handleEdit}>
      <div className="title-button-tray">
        <h2>Skills</h2>

        <ButtonTray visible={editing}>
          <button>Add</button>
        </ButtonTray>
      </div>

      <ul>
        {skillList.map((skill) => (
          <li key={skill.key}>{skill.content}</li>
        ))}
      </ul>
    </SectionCard>
  );
}
