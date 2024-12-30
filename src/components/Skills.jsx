import { useState } from "react";
import SectionCard from "./SectionCard";

export default function Skills() {
  const [editing, setEditing] = useState(false);

  return (
    <SectionCard editing={editing}>
      <h2>Skills</h2>
      <ul>
        <li>
          Backend Development- Python (Flask, pytest, pandas), Azure Functions,
          MSSQL
        </li>
        <li>Automation and Scraping - html, css, js, Selenium</li>
        <li>CI / CD - git, GitHub Workflows, Linux, Docker</li>
      </ul>
    </SectionCard>
  );
}
