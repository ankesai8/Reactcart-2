import React from "react";
import Card from "./Card";
import"./Card.css"
const Items = (props) => {
  return (
    <div className="padd container-fluid row">
      {props.data.map((ele) => (
        <Card key={ele.id} details={ele} onclick={props.onclick}/>
      ))}
    </div>
  );
};
export default Items;
