import React, { useState, useRef } from 'react';
import '../App.css'; // Asegúrate de tener este CSS
const images = [
  { src: '/img/021.jpg', etiqueta: 'Experiencia exclusiva' },
  { src: '/img/021.jpg', etiqueta: 'Grupos Reducidos' },
  { src: '/img/021.jpg', etiqueta: 'Prioridad Seguridad' },
  { src: '/img/021.jpg', etiqueta: 'Bosque Privado' },
  { src: '/img/021.jpg', etiqueta: 'Piscina Termal' },
  { src: '/img/021.jpg', etiqueta: 'Vistas Únicas' },
];

const radius = Math.min(window.innerWidth, 400) / 2;

export const Principal = () => {
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

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
    setRotation((prev) => prev + deltaX * 0.5);
  };

  return (
    <>
    
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
            const baseAngleDeg = (360 / images.length) * index + rotation;
            const angle = (baseAngleDeg * Math.PI) / 180;

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const angleFromTop = Math.cos(angle - (3 * Math.PI) / 2);
            const scale = 0.8 + angleFromTop * 0.2;
            const opacity = 0.6 + angleFromTop * 0.4;

            return (
              <div
                key={index}
                className="carrusel-item"
                style={{
                  top: radius + y,
                  left: radius + x,
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
