import React from "react";
import data from "../data";
import Main from "./Main";

import { Link } from 'react-router-dom'
import Layout from '../Common/Layout'
import ProductComponent from '../Common/ProductComponent'
import Copyrights from '../Common/Copyrights'

function Dashboard(props) {
  const { products } = data;
  return (
    <>
    <div>
        <Layout
    title='WELCOME TO FANTASY DRESS'
    className='container-fluid'
    >
        {/* <div className='row'> 
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        
        </div> */}
        <Copyrights/>
    </Layout>
    
    </div>
    </>
  );
}

export default Dashboard;
