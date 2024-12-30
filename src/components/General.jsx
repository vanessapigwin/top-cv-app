import { useState } from "react";
import general from "../data";
import "../styles/General.css";
import SectionCard from "./SectionCard";

export default function GeneralSection() {
  const divStyle = {
    backgroundColor: "#dce3eb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "1em",
  };

  const [generalData, setGeneralData] = useState(general);
  const [editing, setEditing] = useState(false);

  function handleContent(e) {
    e.preventDefault();
    const form = e.target.form;
    if (form) updateData(form);
    setEditing(!editing);
  }

  function updateData (form) {
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData);
    setGeneralData(updatedData);
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
      <form id='general' className="general-input">
        <input defaultValue={general.name} name="name"></input>
        <input defaultValue={general.email} name="email"></input>
        <input defaultValue={general.contactNo} name="contactNo"></input>
        <input defaultValue={general.github} name="github"></input>
      </form>
    );
  }

  return (
    <SectionCard editing={editing} style={divStyle} form='general' onClick={handleContent}>
      <Content />
    </SectionCard>
  );
}
