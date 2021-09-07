import React from "react";

const Computer = (props) => {
  const {owner, purpose, os} = props;
  console.log(props)

  return(
    <div>
    <p>Owner: {owner}</p>
    <p>Purpose: {purpose}</p>
    <p>OS: {os}</p>
    </div>
  )
}

export default Computer;