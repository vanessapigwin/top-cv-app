import { useState } from "react";
import { experiences } from "../data";
import SectionCard from "./SectionCard";

function ExpList({ exp }) {
  return (
    <>
      <h4>
        {exp.title}, {exp.employer}, ({exp.start} - {exp.end})
      </h4>
      <ul>
        {exp.accomplishments.map((a) => (
          <li>{a}</li>
        ))}
      </ul>
    </>
  );
}

export default function WorkExperience() {
  const [editing, setEditing] = useState(false);
  const [expList, setExpList] = useState(experiences);

  return (
    <SectionCard editing={editing}>
      <h2>Professional Experience</h2>
      {expList.map((exp) => (
        <ExpList exp={exp} />
      ))}
    </SectionCard>
  );
}
