import React from "react";
import ReactDom from "react-dom";
import Cartitem from "./Cartitem";
import "./Cartmodal.css";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onclick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className="cart">{props.value.map((ele) => (<Cartitem key={ele.id} value={ele} onremove={props.onremove}/>))}
      <div><button className="close btn-primary" onClick={props.onclick}>Close</button></div>
    </div>
  );
};
const Cartmodel = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onclick={props.onclick} />,
        document.getElementById("overlay")
      )}
      {ReactDom.createPortal(
        <ModalOverlay value={props.value} onclick={props.onclick} onremove={props.onremove} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};
export default Cartmodel;
