import React, { useEffect, useRef } from 'react';

export function Room() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image1 = new Image();
    image1.src = "/picture/default_background.jpg";

    const image2 = new Image();
    image2.src = "/picture/character.png";

    image1.onload = () => {
      ctx.drawImage(image1, 0, 0);
    };
    image2.onload = () => {
        ctx.drawImage(image2, 460, 200);
    }
  }, []);

  return <canvas ref={canvasRef} width={1000} height={500} />;

}