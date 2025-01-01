import { useState } from "react";
import { general } from "../data";
import extractFormData from "../utils/helpers";
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
    if (form) {
      const data = extractFormData(form);
      setGeneralData(data);
    }
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
      <form id="general" className="general-input">
        <input
          name="name"
          placeholder="Name"
          defaultValue={generalData.name}
        ></input>
        <input
          name="email"
          placeholder="E-mail"
          defaultValue={generalData.email}
        ></input>
        <input
          name="contactNo"
          placeholder="Contact Number"
          defaultValue={generalData.contactNo}
        ></input>
        <input
          name="github"
          placeholder="Website / GitHub"
          defaultValue={generalData.github}
        ></input>
      </form>
    );
  }

  return (
    <SectionCard
      editing={editing}
      style={divStyle}
      form="general"
      onClick={handleContent}
    >
      <Content />
    </SectionCard>
  );
}
