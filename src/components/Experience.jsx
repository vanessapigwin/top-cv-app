import { useState } from "react";
import { experiences } from "../data";
import SectionCard from "./SectionCard";

function ExpList({ exp }) {
  return (
    <>
      <div className='expEntry'>
        <h4>
          {exp.title}, {exp.employer}, ({exp.start} - {exp.end})
        </h4>
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

  return (
    <SectionCard editing={editing} onClick={handleChange}>
      <h2>Professional Experience</h2>
      {expList.map((exp) => (
        <ExpList exp={exp} key={exp.key} />
      ))}
    </SectionCard>
  );
}
