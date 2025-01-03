import { useState } from "react";
import { skills } from "../data";
import SectionCard from "./SectionCard";
import ButtonTray from "./ButtonTray";
import ListItem from "./ListItem";
import ModalForm from "./Form";

export default function Skills() {
  const [editing, setEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [skillList, setSkillList] = useState(skills);

  function handleFormCancel() {}

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function handleAdd(e) {
    handleFormSubmit(e)
  }

  function handleEdit() {}

  function handleDelete() {}

  return (
    <SectionCard editing={editing} onClick={() => setEditing(!editing)}>
      <div className="title-button-tray">
        <h2>Skills</h2>

        <ButtonTray visible={editing}>
          <button onClick={() => setIsAdding(true)}>Add</button>
        </ButtonTray>
      </div>

      {isAdding && (
        <ModalForm
          title="Add Skill"
          handleFormSubmit={handleAdd}
          handleFormCancel={handleFormCancel}
        >
          <input placeholder="Content"></input>
        </ModalForm>
      )}

      <ul>
        {skillList.map((skill) => (
          <ListItem key={skill.key} title={skill.content} editing={editing} />
        ))}
      </ul>
    </SectionCard>
  );
}
