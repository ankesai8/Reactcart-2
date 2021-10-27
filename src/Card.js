import "./Card.css";
const Card = (props) => {
  const addtocart = ()=>{
    props.onclick(props.details);
  }
  return (
    <div className="col-6 col-md-4 col-lg-3 p-3">
      <div className="cborder mb-5 text-center pb-4">
        <div className="img" style={{ height: 150 }}>450 X 300</div>
        <h3>{props.details.name}</h3>
        <h5>{props.details.price}</h5>
        <button className="addtoc btn" disabled ={props.details.disabled === "false" ? false : true} onClick={addtocart}><span>{props.details.disabled === "false" ? "Add to card" : "Added to cart"}</span></button>
      </div>
    </div>
  );
};

export default Card;
