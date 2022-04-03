import React, { useEffect, useState } from "react";
import SimpleAppBar from "./Common/Appbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Notfound from './Common/Notfound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const PAGE_PRODUCTS="Product";
const PAGE_CART="cart";

const cartItemsFromLocalStorage =JSON.parse(localStorage.getItem("cartItems"))

function App() {
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const[page,setPage]=useState(PAGE_PRODUCTS);

  useEffect(() =>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  },[cartItems]);


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      let temp = [];
      cartItems.map((x) => {
        if (x.id !== product.id) {
          temp.push(x);
        }
        return x;
      });
      setCartItems(temp);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/home' render={() => <Home onAdd={onAdd}></Home>}></Route>
            <Route path='/shop' component={Product} exact />
            <Route path={"/cart"}
          render={() => (
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            ></Cart>
          )}
        ></Route>
            <Route
          path={"/orders"}
          component={() => <Orders cartItems={cartItems}></Orders>}
        ></Route>
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
    
      {/* <React.Fragment>
      <SimpleAppBar></SimpleAppBar>
      <Switch>
        <Route
          path={"/home"}
          render={() => <Home onAdd={onAdd}></Home>}
        ></Route>
        <Route
          path={"/cart"}
          render={() => (
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            ></Cart>
          )}
        ></Route>
        <Route
          path={"/orders"}
          component={() => <Orders cartItems={cartItems}></Orders>}
        ></Route>
         <Route
          path={"/Notfound"}
          component={Notfound}  ></Route> 
      </Switch>
    </React.Fragment>   */}
    </>
  );
}

export default App;
