import React, { useState } from "react";

const ComputerForm = (props) => {
  const [owner, setOwner] = useState(props.owner ? props.owner: "")
  const [purpose, setPupose] = useState(props.purpose ? props.purpose: "")
  const [os, setOs] = useState(props.os ? props.os: "")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
      props.updateComputers({id: props.id, owner, purpose, os})
    } else {
      props.addComputers({owner,purpose,os})
    }

  }

  return(
    <div className="computerDiv">
      <h1>Computer form</h1>
      <form onSubmit={handleSubmit}>
      <p>Owner: </p>
      <input value={owner}
        onChange = {(e) => {
        setOwner(e.target.value)}
      }/>
      <p>Purpose: </p>
      <input value={purpose}
        onChange = {(e) => {
        setPupose(e.target.value)}
      }/>
      <p>OS: </p>
      <input value={os}
      onChange = {(e) => {
        setOs(e.target.value)}
      }/>
      <button>{props.id ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}

export default ComputerForm;