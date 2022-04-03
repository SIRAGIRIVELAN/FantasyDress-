import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import CardM from '@mui/material/Card';
import CardContent  from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';


const useStyles = makeStyles((theme) => ({
icon: {
    marginRight: theme.spacing(2),
},
heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
},
heroButtons: {
    marginTop: theme.spacing(4),
},
cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width:'300px',
},
card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width:'300px'
},
cardMedia: {
    paddingTop: '56.25%', // 16:9
},
cardContent: {
    flexGrow: 1,
},
productDescription: {
    minHeight: '100px',
    color:'#555',
    fontWeight:200
},
footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
},
}));

const ProductComponent = () => {


const showStock = (quantity) => {
    return quantity > 0 ? (
    <span className='badge badge-primary badge-pill inStock'>In Stock </span>
    ) : (
    <span className='badge badge-danger badge-pill inStock'>Out of Stock </span>
    );
};




const classes = useStyles();
return (
    <div className='cardBox'>
        <ShowImage item={"https://ecommerce-anusha.s3.amazonaws.com/4-Wl0xXfd-samsung.jpeg"} url='product' />
        <div className='boxes'>
            <Typography gutterBottom variant='h5' component='h2'>
                {"Samsung"}
            </Typography>
            <div>
                <span className='black-101'>₹ {"11000"}</span>{showStock(10)}
            </div>
        </div>
    </div>
);};

export default ProductComponent;
