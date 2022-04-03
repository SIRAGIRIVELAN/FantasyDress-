import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const pages = ['Home', 'Cart', 'My Order'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MenuBar = () => {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};

return (
    <AppBar position="static" sx={{backgroundColor:'orange',textTransform:'capitalize'}}>
    <Container maxWidth="xl">
        <Toolbar disableGutters>
        <NavLink to='/'>
        <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',textTransform:'capitalize',fontSize:'18px' }}
            >
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex',fontSize:'30px' } }}
        >
            FANTASY STORE
        </Typography></Button>
        </NavLink>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <NavLink to='/'><Typography textAlign="center">{page}</Typography></NavLink>
                </MenuItem>
            ))}
            </Menu>
        </Box>
       
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            
                
                
           
            <NavLink to='/home'>
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',textTransform:'capitalize',fontSize:'18px' }}
            >
                Products
            </Button>
            </NavLink>
            <NavLink to='/cart'>               
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',textTransform:'capitalize',fontSize:'18px'  }}
            >
              Cart
            </Button>            
            </NavLink>
            <NavLink to='/orders'>
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',textTransform:'capitalize',fontSize:'18px'  }}
            >
                My Order
            </Button>
            </NavLink>
        </Box>
        <Button color="inherit" sx={{textTransform:'capitalize',fontSize:'18px'}}>Logout</Button>
        </Toolbar>
    </Container>
    </AppBar>
);
};
export default MenuBar;
