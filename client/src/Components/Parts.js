import React from 'react';

const Parts = (props) => {

  const {computer, part} = props
  return (
    <div>
      {part.map((part) =>{
        return(
          <div key={part.id}>
          <p>{part.name}</p>
          </div>
      )})}
    </div> )
}

export default Parts