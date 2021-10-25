import React from "react";

const Header = (props) => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-around">

      <i href="#"class="navbar-brand">Home</i>
      <i href="#"class="navbar-brand"> About</i>
      
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">

              <option value="1">All products</option>
              <option value="2">New arrivals</option>
              <option value="3">popular items</option>
    </select>  
     

      <button class="addtoc px-4"onClick={props.onclick}><i class="fas fa-shopping-cart"></i><i className="px-2">Cart </i><span className="noofitems bg-dark text-white py-1 px-2">{props.noofitems}</span></button>
      </nav>
      <div className="jumbotron-fluid text-center text-white bg-dark" style={{padding: "90px",fontsize: "500px" }}>
        <p className="display-1" style={{ fontWeight: "Times New Roman",fontsize:"360px" }}><h1>Shop in Style </h1></p>
        <p className="mutdis text-muted">With this shop hompeage template</p>
      </div>
    </>
  );
};

export default Header;
