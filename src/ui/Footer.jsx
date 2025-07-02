import { Box, Typography } from '@mui/material';
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111',
        color: '#fff',
        py: 3,
        px: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        height={{ xs: '20vw', sm: '10vw' }}
        textAlign={{ xs: 'center', sm: 'left' }}
        gap={2}
      >
        <Box flex={1} textAlign="center">
          
        </Box>
            <Box 
                flex={2} 
                display="flex"
                justifyContent="space-between" 
                alignItems="center" 
                px={2}
                height={{ xs: '20vw', sm: '10vw' }}
                
            >
                <Box >
                <Typography variant="body2" sx={{fontFamily:'Impact'}}>
                    GALERÍA DE AVENTURAS
                </Typography>
                <Button 
                sx={{
                  backgroundColor:"#a50d0d",
                  color:'white',
                  borderRadius: '20px',
                  margin:1
                  }}>
                    <Typography sx={{fontFamily:'Impact'}}>Ver Galería</Typography> <ArrowCircleRightIcon sx={{ml:1}}/>
                </Button>
                </Box>

                <Box>
                <img
                    src="img/021.jpg"
                    alt="Imagen centro"
                    style={{ height:150, borderRadius: 8 }}
                />
                </Box>
            </Box>
        <Box flex={1} textAlign="center">
          
        </Box>
      </Box>
    </Box>
  );
};