import React from "react";

const card = (props) => {
  
  return (
    <div className="card">
      <img src={props.img} alt="image"
      />
      <h1>{props.user},{props.age}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        incidunt quis aperiam perspiciatis numquam amet quia doloribus labore
        soluta sint.
      </p>
      <button>view profile</button>
    </div>
  );
};

export default card;
