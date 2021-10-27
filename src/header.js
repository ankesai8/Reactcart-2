import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Header = (props) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-around">
        <i href="#"class="navbar-brand">Shoping.in</i>
        <button class="addtoc px-4"onClick={props.onclick}><i class="fas fa-shopping-cart"></i><i className="px-2">Cart </i><span className="noofitems bg-dark text-white py-1 px-2">{props.noofitems}</span></button>
      </nav>
      <div className="jumbotron-fluid text-center text-white bg-dark" style={{ padding: "90px" }}>
        <p className="display-1" style={{ fontWeight: "bold" }}>Shop in Style</p>
        <p className="mutdis text-white muted">With this shop hompeage template</p>
      </div>
    </>
  );
};

export default Header;
