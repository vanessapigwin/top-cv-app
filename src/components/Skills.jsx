import { useState } from "react";
import SectionCard from "./SectionCard";

export default function Skills() {
  const [editing, setEditing] = useState(false);

  return (
    <SectionCard editing={editing}>
      <h2>Skills</h2>
      <ul>
        <li>
          <b>Backend Development</b> - Python (Flask, pytest, pandas), Azure
          Functions, MSSQL
        </li>
        <li>
          <b>Automation and Scraping</b> - html, css, js, Selenium
        </li>
        <li>
          <b>CI / CD</b> - git, GitHub Workflows, Linux, Docker
        </li>
      </ul>
    </SectionCard>
  );
}
