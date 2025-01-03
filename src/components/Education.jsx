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
  const [educList, setEducList] = useState(education);

  return (
    <SectionCard editing={editing} onClick={() => setEditing(!editing)}>
      <div className="title-button-tray">
        <h2>Education</h2>
        <ButtonTray visible={editing}>
          <button>Add</button>
        </ButtonTray>
      </div>

      <ul>
        {educList.map((ed) => (
          <EducationEntry key={ed.key} ed={ed} editing={editing} />
        ))}
      </ul>
    </SectionCard>
  );
}
