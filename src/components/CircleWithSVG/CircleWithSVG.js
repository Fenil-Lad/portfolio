import React from 'react';

const CircleWithSVG = ({ width = 300, height = 300, radius = 100, innerText = "", fontSize = 18 }) => {
  const centerX = width / 2;
  const centerY = height / 2;

  const arrowSVG = (
    <svg width="30px" height="100%" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path>
    </svg>
  );

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <canvas
        width={width}
        height={height}
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'white'; // White color for the circle
            ctx.lineWidth = 1; // Circle's border width
            ctx.stroke();
          }
        }}
      ></canvas>
      <span
        style={{
          position: 'absolute',
          color: 'white', // White text
          fontSize: fontSize,
          textAlign: 'center',
        }}
      >
        {innerText || arrowSVG}
      </span>
    </div>
  );
};

export default CircleWithSVG;
