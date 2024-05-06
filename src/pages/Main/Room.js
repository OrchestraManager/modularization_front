import React, { useEffect, useRef } from 'react';
import "./Room.css";

export function Room() {

  const canvasRef = useRef(null);
  const canvasWidth = 1000;

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
        ctx.drawImage(image2, 0.46*canvasWidth, 200);
    }
  }, []);

  return (
    <div className = "room-container" width={canvasWidth}>
      <div className = "room-top">
        <div className = "text500">나의 공연장</div>
        <div className = "text600">꾸미러 가기</div>
      </div>
      <canvas ref={canvasRef} className = "canvas" width={canvasWidth} height={500} />;
    </div>
  )
}