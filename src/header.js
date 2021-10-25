import React from "react";

const Header = (props) => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-around">

      <i href="#"class="navbar-brand">Home</i>
      <i href="#"class="navbar-brand"> Search</i>
      <i href="#"class="navbar-brand"> Login</i>
      <i href="#"class="navbar-brand">Shoping.in</i>
      <button class="addtoc px-4"onClick={props.onclick}><i class="fas fa-shopping-cart"></i><i className="px-2">Cart </i><span className="noofitems bg-dark text-white py-1 px-2">{props.noofitems}</span></button>
      </nav>
      <div className="jumbotron-fluid text-center text-white bg-dark" style={{padding: "90px",fontsize: "500px" }}>
        <p className="display-1" style={{ fontWeight: "Times New Roman",fontsize:"360px" }}><h1>Shop in stores </h1></p>
        <p className="mutdis text-muted">*-----Shop on your convinence-----*</p>
      </div>
    </>
  );
};

export default Header;
