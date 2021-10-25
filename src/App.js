import './App.css';
import React, { useState } from "react";
import Footer from './footer';
import Header from './header';
import Items from './items';
import Cartmodel from './cart/Cartmodel';
const item = [
  {
    id: "1",
    name: "Smart phone",
    rating: "false",
    price: "$125.00",
    disabled:"false",
  },
  {
    id: "2",
    name: "Home Theatre",
    rating: "false",
    price: "$1200.00 - $2800.00",
    disabled:"false",
  },
  {
    id: "3",
    name: "Micro Oven",
    rating: "true",
    price: "$188.00",
    disabled:"false",
  },
  {
    id: "4",
    name: "Smart Tv",
    rating: "true",
    price: "$400.00",
    disabled:"false",
  },
  {
    id: "5",
    name: "Facial Product",
    rating: "false",
    price: "$40.00 - $80.00",
    disabled:"false",
  },
  {
    id: "6",
    name: "Kitchen Item",
    rating: "true",
    price: "$188.00",
    disabled:"false",
  },
  {
    id: "7",
    name: " Jio Fiber",
    rating: "false",
    price: "$120.00",
    disabled:"false",
  },
  {
    id: "8",
    name: "Headset",
    rating: "true",
    price: "$40.00",
    disabled:"true",
  },
 
];
function App() {
  const[cart,setcart]=useState(false);
  const [cartitems, setcartitems] = useState([]);
  const [data, setdata]= useState(item);

  const addtocarthandler =(props)=>{
      setcartitems( prevSelected => [...prevSelected, props]);
      const index = data.indexOf(props);
      setdata([...data.slice(0,index),{...props, disabled:"true"} ,...data.slice( index+1 ,data.length)]);
  };

  const removefromcart = props =>{
    const UpdatedItems = cartitems.filter(item => item.id !== props.id);
    setcartitems([...UpdatedItems]);
    const index = data.findIndex((item) => item.id === props.id);
    setdata([...data.slice(0,index),{...props, disabled:"false"} ,...data.slice( index+1 ,data.length)]);
  }

  const setcarthandler = () =>{
    setcart(true);
  }
  
  const closecarthandler = () =>{
    setcart(false);
  }

  return (
    <>
    {cart && <Cartmodel onclick={closecarthandler} value={cartitems} onremove={removefromcart}/>}
    <Header onclick={setcarthandler} noofitems={cartitems.length}/>
    <br/>
    <Items onclick={addtocarthandler} data={data}/>
    <Footer/>
    </>
  );
}

export default App;
