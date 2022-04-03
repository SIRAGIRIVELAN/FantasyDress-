import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

import Layout from '../Common/Layout';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Orders(props) {
  const classes = useStyles();
  
  return (
    <>
      <div>
        <Layout
    title='ORDERS'
    className='container-fluid'
    >
    </Layout>
    
    </div>
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "10vh"}}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        lg={6}
      >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table" style={{ border: "1px  black" }}>
            <TableHead>
              <TableRow style={{ backgroundColor:"orange"}}>
                <TableCell>S.No</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Price Per Product</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.cartItems.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.price * row.qty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid></>
  );
  
}

export default Orders;
