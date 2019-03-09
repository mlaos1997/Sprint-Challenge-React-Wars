import React from "react";

function Character(props) {
  return (
    <div>
      <ul>
        <li key={props.char.birth_year}>{props.char.name}</li>
      </ul>
    </div>
  );
}

export default Character;
