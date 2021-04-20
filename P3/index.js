console.log("Ejecutando JS...");

const canvas = document.getElementById("Escenario");

//-- ESCENARIO
canvas.width = 700;
canvas.height = 400;


//-- PALA IZQ
const ctx = canvas.getContext("2d");
ctx.beginPath();
  ctx.rect(10,5, 10, 50);
  ctx.fillStyle = 'black';
  ctx.fill();
    ctx.stroke();
ctx.closePath();

//-- PALA DER
const cty = canvas.getContext("2d");
cty.beginPath();
  cty.rect(10,5, 10, 50);
  cty.fillStyle = 'black';
  cty.fill();
    cty.stroke();
cty.closePath();

this.cty_ini = 180;