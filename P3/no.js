console.log("Ejecutando JS...");

const canvas = document.getElementById("Escenario");

//-- ESCENARIO
canvas.width = 400;
canvas.height = 500;


//-- PALA IZQ
const ctx = canvas.getContext("2d");
ctx.beginPath();
  ctx.rect(170,465, 70, 10);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
ctx.closePath();

//-- Constantes de los ladrillos
const LADRILLO = {
    F: 8,  // Filas
    C: 8,  // Columnas
    w: 40,
    h: 20,
    origen_x: 20,
    origen_y: 20,
    padding: 10,
    visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: (LADRILLO.w + LADRILLO.padding) * j,
          y: (LADRILLO.h + LADRILLO.padding) * i,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

//--ladrillos[0][0].visible = false;


//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'pink'
        ctx.fill();
        ctx.stroke();
      }
    }
}

//-- PELOTA

ctx.beginPath();
  ctx.arc(205,350, 6, 0, 2 * Math.PI); 

  ctx.fillStyle = 'black';
  
  
  ctx.fill();
ctx.closePath();


let vidas = 5;
let puntos = 0;
let play_button = document.getElementById("play");
let izq_button = document.getElementById("izq");
let der_button = document.getElementById("der");

