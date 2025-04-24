const canvas = document.getElementById('fig_4');
const ctx = canvas.getContext('2d');

// ========== RELLENAR CARAS PRINCIPALES CON COLOR NARANJA ==========

// Cara izquierda
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(50, 150);
ctx.lineTo(50, 350);
ctx.lineTo(250, 450);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();

// Cara derecha
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(350, 100);
ctx.lineTo(450, 250);
ctx.lineTo(450, 350);
ctx.lineTo(250, 450);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();

// Cara superior del cubo interior
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 150);
ctx.lineTo(350, 100);
ctx.lineTo(250, 50);
ctx.lineTo(150, 100);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();

// Parte frontal del cubo interior
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 250);
ctx.lineTo(350, 200);
ctx.lineTo(350, 100);
ctx.lineTo(150, 100);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();

// Parte inferior interna
ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(250, 250);
ctx.lineTo(350, 300);
ctx.lineTo(250, 450);
ctx.lineTo(150, 300);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();

// ========== DIBUJAR TODAS LAS LÍNEAS EN BLANCO ==========

ctx.strokeStyle = 'black';
ctx.lineWidth = 1.5;

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const lines = [
  [250, 50, 50, 150],
  [250, 50, 350, 100],
  [50, 150, 50, 350],
  [250, 450, 50, 350],
  [250, 450, 450, 350],
  [450, 350, 450, 250],
  [450, 250, 350, 200],
  [350, 200, 350, 100],
  [150, 100, 250, 150],
  [150, 300, 350, 300],
  [50, 150, 150, 300],
  [150, 300, 250, 450],
  [350, 300, 250, 450],
  [250, 150, 250, 250],
  [150, 100, 250, 250],
  [250, 150, 350, 100],
  [250, 250, 350, 200],
  [250, 250, 150, 300],
  [350, 300, 450, 250],
];

lines.forEach(([x1, y1, x2, y2]) => drawLine(x1, y1, x2, y2));
