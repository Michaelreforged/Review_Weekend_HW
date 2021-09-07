import React from "react";
import './Computer.css'
import ComputerForm from "./ComputerForm";

const Computer = (props) => {
  const {id, owner, purpose, os, updateComputers, deleteComputers} = props;

  return(
    <div className="computerDiv">
      <h1>Computer {id}</h1>
    <p>Owner: {owner}</p>
    <p>Purpose: {purpose}</p>
    <p>OS: {os}</p>
    <ComputerForm 
    id = {id}
    owner = {owner}
    purpose = {purpose}
    os = {os}
    updateComputers = {updateComputers}
    deleteComputers = {deleteComputers}
    />
    </div>
  )
}

export default Computer;