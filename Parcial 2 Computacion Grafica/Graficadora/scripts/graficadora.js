const canvas = document.getElementById('lineCanvas');
const ctx = canvas.getContext('2d');

function drawAxes() {
    // Dibujar eje X
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2); // se divide para colocar el eje en el centro
    ctx.lineTo(canvas.width, canvas.height / 2); 
    ctx.strokeStyle = 'gray';
    ctx.stroke();

    // Dibujar eje Y
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
}

// Llamar a drawAxes una vez al inicio para dibujar los ejes
drawAxes(); 

function drawLine() {
    const x1 = parseInt(document.getElementById('x1').value);
    const y1 = parseInt(document.getElementById('y1').value);
    const x2 = parseInt(document.getElementById('x2').value);
    const y2 = parseInt(document.getElementById('x2').value);

    // Dibujar la línea sin borrar el canvas
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + x1, canvas.height / 2 - y1); //aqui se divide para colocar el eje en el centro y se le suma para que se dibuje en el centro
    ctx.lineTo(canvas.width / 2 + x2, canvas.height / 2 - y2);
    ctx.strokeStyle = 'white';
    ctx.stroke();
}
