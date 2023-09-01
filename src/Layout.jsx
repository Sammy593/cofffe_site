import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link} from "react-router-dom";
//import {  } from '@mui/material';

const pages = ['inicio', 'nosotros', 'productos'];

export default function Layout(){
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/inicio">
          CoffeeScript
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  return (
    <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box className="imgLogo"
            component="img"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            alt=""
            src="/src/assets/img/logos/coffee-transparente.png"
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/inicio"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'secondary.main',
              textDecoration: 'none',
            }}
          >
            CoffeeScript
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
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
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{color:"secondary.main"}}>
                  <Link to={page} sx={{textDecoration:"none"}}>
                    <Typography sx={{color:"secondary.main"}} fontWeight="100" textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
              </Menu>
          </Box>
          <Box className="imgLogo"
            component="img"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width:"100px" }}
            alt=""
            src="/src/assets/img/logos/coffee-transparente.png"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/inicio"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 100,
              letterSpacing: '.3rem',
              color: 'secondary.main',
              textDecoration: 'none',
            }}
          >
            CoffeeScript
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"end" }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={page}
                sx={{ my: 3, color: 'secondary.main', display: 'block', fontSize:"18px" }}
              >
                {page}
              </Button>
              
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

     <Outlet />

     <Box component="footer" sx={{ bgcolor: 'tercero.main', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          CoffeeScript
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        El mejor café
        </Typography>
        <Copyright />
      </Container>
    </Box>


     </div>
  );
}
