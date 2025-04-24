const canvas = document.getElementById('fig_1');
const ctx = canvas.getContext('2d');

// FONDO ROSADO DENTRO DE LA FIGURA PRINCIPAL
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(50, 150);
ctx.lineTo(50, 350);
ctx.lineTo(250, 450);
ctx.lineTo(450, 350);
ctx.lineTo(450, 250);
ctx.lineTo(350, 100);
ctx.closePath();
ctx.fillStyle = '#ff69b4'; // Color rosado
ctx.fill();

// SUBFIGURA INTERNA - POLÍGONO CENTRAL
ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(350, 100);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(150, 300);
ctx.lineTo(250, 250);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(250, 350);
ctx.lineTo(250, 250);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(250, 350);
ctx.lineTo(350, 300);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(350, 300);
ctx.lineTo(450, 250);
ctx.lineTo(350, 100);
ctx.closePath();
ctx.fill();

// REDIBUJAR TODAS LAS LÍNEAS BLANCAS
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

// Redibujamos todas tus líneas
drawLine(250, 50, 50, 150);
drawLine(250, 50, 350, 100);
drawLine(50, 150, 50, 350);
drawLine(250, 450, 50, 350);
drawLine(250, 450, 450, 350);
drawLine(450, 350, 450, 250);
drawLine(450, 250, 350, 100);
drawLine(250, 450, 250, 350);
drawLine(50, 150, 150, 200);
drawLine(150, 200, 350, 100);
drawLine(150, 200, 150, 300);
drawLine(150, 300, 250, 350);
drawLine(250, 350, 350, 300);
drawLine(350, 300, 250, 150);
drawLine(250, 150, 250, 250);
drawLine(250, 250, 350, 300);
drawLine(250, 250, 150, 300);
drawLine(350, 300, 450, 250);
