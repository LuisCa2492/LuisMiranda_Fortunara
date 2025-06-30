import React from 'react'
import Box from "@mui/material/Box";

export const ContenidoCambiante = ({titulo}) => {
  return (
    <>
        <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: { xs: 0, sm: '6vw' },
        marginTop: 9,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column', // para apilar el texto principal y secundario
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
      <span>Recorrido dentro de nuestro bosque cambiante. {titulo}</span>
      <span style={{ fontSize: '0.7rem', fontWeight: 400, marginTop: 4 }}>Día Superquantium</span>
    </Box>
    </>
  )
}

