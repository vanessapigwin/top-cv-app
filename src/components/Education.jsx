import { useState } from "react";
import SectionCard from "./SectionCard";

export default function Education() {
  const [editing, setEditing] = useState(false);

  return (
    <SectionCard editing={editing}>
      <h2>Education</h2>
      <ul>
        <li>
          M.S. Civil Engineering - Geotechnical, University of the Philippines
          (2016)
        </li>
        <li>B.S. Civil Engineering, University of Santo Tomas (2008)</li>
      </ul>
    </SectionCard>
  );
}
