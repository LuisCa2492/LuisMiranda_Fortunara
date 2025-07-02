import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const ContenidoCambiante = ({titulo}) => {
  return (
    <>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            right: { xs: 0, sm: '6vw' },
            marginTop: {xs:9, sm:12},
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderTopLeftRadius: '12px',
            zIndex: 1000,
            fontWeight: 'bold',
            fontSize: { xs: '0.6rem', sm: '0.9rem' },
            textAlign: 'center',
            padding: 1,
            maxWidth: '10vw',
          }}
        >
      <Typography sx={{fontFamily:'Impact',marginRight:3}}>Recorrido dentro de nuestro bosque cambiante. {titulo}</Typography>
      <span style={{ fontSize: '0.7rem', 
          fontWeight: 400, 
          marginTop: 4,
          fontFamily: 'Impact',
          fontWeight: 1000,
          color: 'red' }}>
            SUPER QUADS
      </span>
    </Box>
    </>
  )
}