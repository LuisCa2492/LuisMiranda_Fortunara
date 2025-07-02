import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Fragment, useState } from 'react';
import { SiTiktok } from 'react-icons/si';

const pages = ['Tour', 'Galeria de aventuras', 'Acerca de'];

export const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <AppBar position="fixed" sx={{backgroundColor:'#1b0601'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, index) => (
                    <Fragment key={page} >
                    <MenuItem onClick={handleCloseNavMenu} sx={{ py: 1.5 }}>
                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                    {index < pages.length - 1 && (
                        <Divider sx={{ my: 0.5, bgcolor: 'white' }} />
                    )}
                    </Fragment>
               ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center',marginLeft:'14vw'}}>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Impact',
              fontSize: { md: '0.9rem', lg: '1.5rem' },
              fontWeight: 1000,
              color: 'red',
              textDecoration: 'none',
              '&:hover': {
                color: 'red',
                textDecoration: 'none',
              },
              padding:1,
              marginRight:'2vw'
            }}
          >
            SUPER QUADS 
          </Typography>
            {pages.map((page, index) => (
                <Fragment key={page}>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>

                {index < pages.length - 1 && (
                    <Divider
                    orientation="vertical"
                    flexItem
                    sx={{height: 24,mx: 1,bgcolor: 'grey.400',alignSelf: 'center' }}
                    />
                )}
                </Fragment>
            ))}
            </Box>
         
          <SiTiktok size={24} color="#ffffff" />
          <WhatsAppIcon sx={{m:1}}/>
          <InstagramIcon sx={{m:1}}/>

          <Box sx={{ flexGrow: 0, marginRight: '10vw'}}>
            <Button sx={{backgroundColor:"#a50d0d", color:'white',borderRadius: '20px'}}>
                <Typography sx={{fontFamily:'Impact'}}>Reservar</Typography> <ArrowCircleRightIcon sx={{ml:1}}/>
            </Button>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}