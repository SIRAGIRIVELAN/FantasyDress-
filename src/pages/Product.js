
import React from "react";
import './Home';

import Layout from "../Common/Layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../Common/MaterialUI";
import "./style.css";
import Demo from '../images/demo.jpeg'; 
import MenuBar from "../Common/Menu";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <>

    <div className='column'>
    <div className="card">
      <img src={product.image}  alt={product.name} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{product.name}</h2>
        {/* <p className="card__description">{props.description}</p> */}
        <h3 className="card__price">{product.price}</h3>
         <button className="card__btn" onClick={() => onAdd(product)}>Add to Cart</button> 
      </div>
    </div>
    </div>
    </>
  );
}
