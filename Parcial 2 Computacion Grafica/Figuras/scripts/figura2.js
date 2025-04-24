const canvas = document.getElementById('fig_2');
const ctx = canvas.getContext('2d');

// ======== CARAS EXTERIORES ========

// Cara izquierda
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(50, 150);
ctx.lineTo(50, 350);
ctx.lineTo(250, 450);
ctx.lineTo(250, 50);
ctx.closePath();
ctx.fillStyle = 'gray';
ctx.fill();

// Cara derecha
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(450, 150);
ctx.lineTo(450, 350);
ctx.lineTo(250, 450);
ctx.lineTo(250, 50);
ctx.closePath();
ctx.fillStyle = 'gray';
ctx.fill();

// Cara superior
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(50, 150);
ctx.lineTo(250, 150);
ctx.lineTo(450, 150);
ctx.lineTo(250, 50);
ctx.closePath();
ctx.fillStyle = 'gray';
ctx.fill();

// ======== DIBUJAR LAS LÍNEAS ========
ctx.strokeStyle = 'white';
ctx.lineWidth = 1.5;

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Líneas exteriores
drawLine(250, 50, 50, 150);
drawLine(250, 50, 450, 150);
drawLine(50, 150, 50, 350);
drawLine(250, 450, 50, 350);
drawLine(250, 450, 450, 350);
drawLine(450, 350, 450, 150);
drawLine(250, 450, 250, 350);

// Líneas del cubo interior
drawLine(50, 150, 150, 200);
drawLine(150, 200, 250, 150);
drawLine(150, 200, 150, 300);
drawLine(150, 300, 250, 350);
drawLine(250, 350, 350, 300);
drawLine(350, 300, 350, 200);
drawLine(250, 150, 250, 250);
drawLine(250, 150, 350, 200);
drawLine(250, 250, 350, 300);
drawLine(250, 250, 150, 300);
drawLine(350, 200, 450, 150);