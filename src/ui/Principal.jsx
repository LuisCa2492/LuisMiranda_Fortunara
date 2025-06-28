import React, { useState,useRef } from 'react';
import { motion } from 'framer-motion';

const images = [
  'src/assets/img/021.jpg',
  'src/assets/img/021.jpg',
  'src/assets/img/021.jpg',
  'src/assets/img/021.jpg',
  'src/assets/img/021.jpg',
];
const radius = 200; 

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
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
        touchAction: 'none',
        cursor: dragging.current ? 'grabbing' : 'grab',
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerMove={onPointerMove}
    >
      <div
        style={{
          width: 300,
          height: 300,
          position: 'relative',
          borderRadius: '50%',
        }}
      >
        {images.map((src, index) => {
          const angle = ((360 / images.length) * index + rotation) * (Math.PI / 180);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <img
              key={index}
              src={src}
              alt={`Imagen ${index}`}
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                position: 'absolute',
                top: 150 + y,
                left: 150 + x,
                transform: 'translate(-50%, -50%)',
                transition: 'top 0.1s, left 0.1s',
                userSelect: 'none',
                pointerEvents: 'auto',
              }}
              draggable={false}
            />
          );
        })}
      </div>
    </div>
  )
}