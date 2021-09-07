import React, { useState } from "react";
import './Computer.css'
import ComputerForm from "./ComputerForm";

const Computer = (props) => {
  const {id, owner, purpose, os, updateComputers, deleteComputers} = props;
  const [form, setForm] = useState(false);

  return(
    <div className="computerDiv">
      <h1>Computer {id}</h1>
    <p>Owner: {owner}</p>
    <p>Purpose: {purpose}</p>
    <p>OS: {os}</p>
    <button onClick={() => setForm(!form)}>
      {form ? "Close Edit" :"Edit"}
    </button>
    {form && (<ComputerForm 
    id = {id}
    owner = {owner}
    purpose = {purpose}
    os = {os}
    updateComputers = {updateComputers}
    />)}
    <button onClick={() => deleteComputers(id)}>Delete Computer</button>
    </div>
  )
}

export default Computer;