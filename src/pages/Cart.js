import { Button, Grid } from "@material-ui/core";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import './cart.css'

import React from "react";
import { Link } from "react-router-dom";
import Layout from '../Common/Layout';

function Cart(props) {
  const { cartItems } = props;  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
 
  return (
    <>  
    <div>
        <Layout
    title='CART'
    className='container-fluid'
    >
    </Layout>
    
    </div>
    <React.Fragment>
      
      <h1 className="title">Shopping Cart</h1>
      <div className="container">
      <br/>
      <br/>
<div className="cart">

  <div className="products">

  {cartItems.length === 0 && <div><font color="red" >*********Cart is empty*********</font></div>}
        {cartItems.map((item) => (
        
    <div key={item.id} className="product">
      
      <img src={item.image} alt={item.name}/>

      <div className="product-info">

        <h3 className="product-name">{item.name}</h3>

        <h3 className="product-name">{item.description}</h3>

        <h4 className="product-price">{item.qty} x ₹{item.price.toFixed(2)}</h4>

        
        <AddBoxRoundedIcon
                onClick={() => props.onAdd(item)}
                color="secondary"
              ></AddBoxRoundedIcon>
              <RemoveCircleOutlineRoundedIcon
                onClick={() => props.onRemove(item)}
                color="primary"
              ></RemoveCircleOutlineRoundedIcon>
              
              
        <p className="product-remove">

          <i className="fa fa-trash" aria-hidden="true"></i>

          <span className="remove"><DeleteRoundedIcon
                onClick={() => props.onDelete(item)}
              ></DeleteRoundedIcon></span>

        </p>

      </div>

    </div>

        ))}

  

  </div>

  {cartItems.length !== 0 && (
        
        

  <div className="cart-total">

    <p>

      <span>Items Price</span>

      <span>₹ {itemsPrice.toFixed(2)}</span>

    </p>

    <p>

      <span>Tax Price</span>

      <span>₹ {taxPrice.toFixed(2)}</span>

    </p>
    

    <p>

      <span>Shipping Price</span>

      <span>{shippingPrice.toFixed(2)}</span>

    </p>
    <hr/>
    <br/>
    <p>

      <span><b>Total Price</b></span>

      <span><b>₹ {totalPrice.toFixed(2)}</b></span>

    </p>
    <Grid item container alignItems="center" justifyContent="center">
                <Grid item container lg={3}>
                  <Button>
                    <Link to="/orders">Checkout</Link>
                  </Button>
                </Grid>
              </Grid>

  </div>
  )}

</div>

</div>


    </React.Fragment>
    </>
  );
}

export default Cart;
