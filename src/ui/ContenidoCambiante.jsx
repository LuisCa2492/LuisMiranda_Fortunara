import React from 'react'
import Box from "@mui/material/Box";

export const ContenidoCambiante = ({titulo}) => {
  return (
    <>
       <Box
            sx={{
                position: 'fixed',
                top: 0,
                right: { xs:0,sm:350},
                marginTop:9,
                width: { xs: '80px', sm: '120px' }, // ancho responsive
                height: { xs: '80px', sm: '120px' }, // alto responsive
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                borderTopLeftRadius: '12px',
                zIndex: 1000,
                fontWeight:"bold",
                fontSize: { xs: '0.5rem', sm: '0.9rem' },
                textAlign: 'center',
                padding:1
            }}
        >
            Recorrido dentro de nuestro bosque cambiante. {titulo}
        </Box>
    </>
  )
}

