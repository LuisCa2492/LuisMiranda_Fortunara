import React from 'react'

export const Other = () => {
  return (
    <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '50vh',
      width: '100vw',
      overflow: 'hidden',
      zIndex: -1,
      backgroundColor: 'black', // para ver si el div se muestra
    }}
  >
    <img
      src="/img/Llanta.png"
      alt="Fondo"
      style={{
        height: '100%',
        width: 'auto',
        objectFit: 'cover',
        display: 'block',
        margin: '0 auto',
      }}
    />
    HOLLAAA
  </div>
  )
}

