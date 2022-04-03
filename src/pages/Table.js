import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getValue } from "@testing-library/user-event/dist/utils";
import './table.css'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper}>
      <h1>My Orders</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style="background-color: orange;">
          <TableRow>
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
                {index}
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
  );
}
