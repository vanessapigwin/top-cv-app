import { useState } from "react";
import { education } from "../data";
import SectionCard from "./SectionCard";

export default function Education() {
  const [editing, setEditing] = useState(false);

  return (
    <SectionCard editing={editing}>
      <h2>Education</h2>
      <ul>
        {education.map((ed) => (
          <li key={ed.key}>
            {ed.degree}, {ed.school} ({ed.yearGraduated})
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
