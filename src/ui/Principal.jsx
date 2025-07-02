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

export const Principal = () => {
  const [rotation, setRotation] = useState(0);
  const [imagenActivaIndex, setImagenActivaIndex] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const radius = useMemo(() => {
    let baseRadius = 80; 
    const width = window.innerWidth;
    if (width >= 1024 && width <= 1344) {
      baseRadius = 400; 
    } 
    const extra = images.length * 35;
    return baseRadius + extra;
  }, [windowWidth, images.length]);


  useEffect(() => {
    let closestIndex = 0;
    let minDiff = Infinity;

    images.forEach((img, index) => {
      const baseAngleDeg = (360 / images.length) * index + rotation;

      const angle = ((baseAngleDeg % 360) + 360) % 360;

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
    setRotation((prev) => {
      const newRotation = prev + deltaX * 0.5;
      return ((newRotation % 360) + 360) % 360; // normaliza entre 0-360
    });
  };

  return (
    <>
    <ContenidoCambiante titulo={imagenSuperior.etiqueta}/>
    <div className="contenedor-principal">
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