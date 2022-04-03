import React from "react";
import data from "../data";
import Main from "./Main";

import { Link } from 'react-router-dom'
import Layout from '../Common/Layout'
import ProductComponent from '../Common/ProductComponent'
import Copyrights from "../Common/Copyrights";
import './home.css'

function Home(props) {
  const { products } = data;
  return (
    <>
    <div>
        <Layout
    title='PRODUCTS'>
    </Layout>
    </div>
    <React.Fragment>
      <div className="App">
        <div className='row'>
          <Main products={products} onAdd={props.onAdd}></Main>
        </div>
      </div>
      <Copyrights/>
      {/* <Grid item container justifyContent="center">
        <Grid item container lg={2} justifyContent="center" alignItems="center">
          <Button variant="contained" color="secondary" size="small">
            <Link to="/cart">Proceed to Cart</Link>
          </Button>
        </Grid>
      </Grid> */}
      
    </React.Fragment>
    </>
  );
}

export default Home;
