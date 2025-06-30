import React, { useState, useRef, useMemo, useEffect } from 'react';
import '../App.css'; 
import { ContenidoCambiante } from './ContenidoCambiante';
const images = [
  { src: '/img/021.jpg', etiqueta: 'Experiencia exclusiva' },
  { src: '/img/021.jpg', etiqueta: 'Grupos Reducidos' },
  { src: '/img/021.jpg', etiqueta: 'Prioridad Seguridad' },
  { src: '/img/021.jpg', etiqueta: 'Bosque Privado' },
  { src: '/img/021.jpg', etiqueta: 'Piscina Termal' },
  { src: '/img/021.jpg', etiqueta: 'Vistas Unicas' },
];
// const radius = Math.min(window.innerWidth, 500) / 2;

export const Principal = () => {
  const [rotation, setRotation] = useState(0);
  const [imagenActivaIndex, setImagenActivaIndex] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const radius = useMemo(() => {
  const baseRadius = 80; // base mínima para 1 imagen
  
  const extra = images.length * 35; // espacio extra por imagen
  return baseRadius + extra;
}, [images.length]);


  useEffect(() => {
  let closestIndex = 0;
  let minDiff = Infinity;

  images.forEach((img, index) => {
    const baseAngleDeg = (360 / images.length) * index + rotation;

    // Normaliza ángulo entre 0 y 360
    const angle = ((baseAngleDeg % 360) + 360) % 360;

    // Diferencia circular con respecto a 270 (arriba)
    const diff = Math.min(
      Math.abs(angle - 270),
      360 - Math.abs(angle - 270)
    );

    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = index;
    }
  });

  setImagenActivaIndex(closestIndex);
}, [rotation]);



  const imagenSuperior = images[imagenActivaIndex];

  const onPointerDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    // setRotation((prev) => prev + deltaX * 0.5);
    setRotation((prev) => {
      const newRotation = prev + deltaX * 0.5;
      return ((newRotation % 360) + 360) % 360; // normaliza entre 0-360
    });
  };

  return (
    <>
    <ContenidoCambiante titulo={imagenSuperior.etiqueta}/>
    <div className="contenedor-principal">
      {/* Carrusel centrado */}
      <div
        className="carrusel"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onPointerMove={onPointerMove}
        style={{
          cursor: dragging.current ? 'grabbing' : 'grab',
        }}
      >
        <div className="carrusel-circulo">
          {images.map((img, index) => {

            const angleStep = (2 * Math.PI) / images.length; // Paso angular uniforme en radianes
            const angle = angleStep * index + (rotation * Math.PI) / 180; // aplica la rotación

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const angleFromTop = Math.cos(angle - (3 * Math.PI) / 2); // 270°
            const scale = 0.8 + angleFromTop * 0.2;
            const opacity = 0.6 + angleFromTop * 0.4;

            return (
              <div
                key={index}
                className="carrusel-item"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  opacity,
                }}
              >
                <img
                  src={img.src}
                  alt={img.etiqueta}
                  className="imagen-circular"
                  draggable={false}
                />
                <div className="etiqueta">{img.etiqueta}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Imagen tipo footer que rota */}
      <div className="footer-contenedor">
        <div className="llanta-wrapper">
          <img
            src="/img/Llanta.png"
            alt="Llanta girando"
            className="llanta-imagen"
            style={{
              transform: `rotate(${-rotation}deg)`,
              transition: 'transform 0.1s linear',
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>

    </>
  );
};
