import React, { Fragment } from 'react';
import Layout from './Layout';
import Copyright from './Copyrights';
import WarningIcon from '@mui/icons-material/Warning';
import { Typography } from '@mui/material';

const Notfound = () => {
return (
    <Layout
    title='Error: 404'
    description='Page Not Found'
    className='container-fluid'
    >
    <div style={{textAlign:'center'}}>
    <Typography variant='h3' gutterBottom>
        <WarningIcon style={{ fontSize: 50, color: '#FF7D00' }} /> Sorry, this page does not
        exist!
    </Typography>
    </div>
    <Copyright />
    </Layout>
);
};

export default Notfound;
