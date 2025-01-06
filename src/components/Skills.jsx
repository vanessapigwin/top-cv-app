import { useState } from "react";
import { skills } from "../data";
import SectionCard from "./SectionCard";
import ButtonTray from "./ButtonTray";
import ListItem from "./ListItem";
import ModalForm from "./Form";
import extractFormData from "../utils/helpers";

export default function Skills() {
  const [editing, setEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [skillList, setSkillList] = useState(skills);

  function handleFormCancel() {
    setEditing(true);
    setIsAdding(false);
    setSelectedIndex(null);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsAdding(false);
    setSelectedIndex(null);
  }

  function handleAdd(e) {
    const data = extractFormData(e.target);
    if (data.content) {
      data.key = crypto.randomUUID();
      const newList = [data, ...skillList];
      setSkillList(newList);
      handleFormSubmit(e);
    } else {
      alert("Please add a skill");
      handleFormCancel(e);
    }
  }

  function handleEdit(e) {
    const data = extractFormData(e.target);
    if (data.content) {
      data.key = crypto.randomUUID();
      const newList = [];
      skillList.forEach((skill) => {
        skill.key === selectedIndex ? newList.push(data) : newList.push(skill);
      });
      setSkillList(newList);
      handleFormSubmit(e);
    } else {
      alert("Skill should not be empty");
      handleFormCancel(e);
    }
  }

  function handleDelete(key) {
    const newList = skillList.filter((skill) => skill.key !== key);
    setSkillList(newList);
  }

  const editingEntry = skillList.find((skill) => skill.key === selectedIndex);

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
          <input placeholder="Content" name="content"></input>
        </ModalForm>
      )}

      {selectedIndex !== null && (
        <ModalForm
          data={editingEntry}
          title="Edit Skill"
          handleFormSubmit={handleEdit}
          handleFormCancel={handleFormCancel}
        >
          <input
            placeholder="Content"
            name="content"
            defaultValue={editingEntry.content}
          ></input>
        </ModalForm>
      )}

      <ul>
        {skillList.map((skill) => (
          <ListItem
            key={skill.key}
            title={skill.content}
            editing={editing}
            handleEdit={() => setSelectedIndex(skill.key)}
            handleDelete={() => handleDelete(skill.key)}
          />
        ))}
      </ul>
    </SectionCard>
  );
}
