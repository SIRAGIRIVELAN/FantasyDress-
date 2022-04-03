import React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material';
import {Box} from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Copyright() {
return (
    <Box mt={8} mb={4}>
    <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <NavLink to='/' className={'names'}>Fantacy Dress</NavLink>{'  '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    </Box>
);
}
