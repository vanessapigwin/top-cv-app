import { useState } from "react";
import general from "../data";
import "../styles/General.css";
import SectionCard from "./SectionCard";

export default function GeneralSection() {
  const divStyle = {
    "background-color": "#dce3eb",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "padding-bottom": "1em",
  };

  const [generalData, setGeneralData] = useState(general);
  const [editing, setEditing] = useState(false);

  function editContent() {
    setEditing(!editing);
  }

  function Content() {
    if (!editing)
      return (
        <>
          <h1>{generalData.name}</h1>
          <p>{generalData.email}</p>
          <p>{generalData.contactNo}</p>
          <p>{generalData.github}</p>
        </>
      );
    return (
      <div className="general-input">
        <input defaultValue={general.name}></input>
        <input defaultValue={general.email}></input>
        <input defaultValue={general.contactNo}></input>
        <input defaultValue={general.github}></input>
      </div>
    );
  }

  return (
    <SectionCard editing={editing} style={divStyle} onclick={editContent}>
      <Content />
    </SectionCard>
  );
}
