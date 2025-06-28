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
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { Fragment } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiTiktok } from 'react-icons/si';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const pages = ['Tour', 'Galeria de aventuras', 'Acerca de'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '-apple-system',
              fontWeight: 1000,
              
              color: 'red',
              textDecoration: 'none',
                
            }}
          >
            SUPER QUADS 
          </Typography>

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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, index) => (
                    <Fragment key={page} >
                    <MenuItem onClick={handleCloseNavMenu} sx={{ py: 1.5 }}>
                        <Typography sx={{ textAlign: 'center' }}>{page} ||||||||</Typography>
                    </MenuItem>
                    {index < pages.length - 1 && (
                        <Divider sx={{ my: 0.5, bgcolor: 'white' }} />
                    )}
                    </Fragment>
               ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
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
          {/* agregar iconos */}
         
          <SiTiktok size={24} color="#ffffff" />
          <WhatsAppIcon sx={{m:1}}/>
          <InstagramIcon sx={{m:1}}/>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{backgroundColor:"#a50d0d", color:'white',borderRadius: '20px'}}>
                Reservar <ArrowCircleRightIcon sx={{ml:1}}/>
            </Button>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}