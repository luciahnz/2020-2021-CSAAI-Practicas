console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);
const ctx = canvas.getContext("2d");

//-- Variables para la bola
let bola_y = 50;
let bola_vy = 0;

//-- Pintar todos los objetos en el canvas
function draw() {

    //-- Constantes de los ladrillos
const LADRILLO = {
    F: 6,  // Filas
    C: 12,  // Columnas
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

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='black';

  //-- x,y, anchura, altura
  ctx.rect( 200,bola_y, 10, 10);
  ctx.fill();

  //-- Raqueta 
  ctx.beginPath();
    ctx.fillStyle='black';
    ctx.rect(275, 650, 80, 10);
    ctx.fill();
    

ctx.beginPath();

//------ PUNTOS
ctx.font = "80px Arial";
ctx.fillStyle = "black";
ctx.fillText("0", 275, 80);

}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola_y >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola_vy = bola_vy * -1;
  }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola_y += bola_vy;

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Obtener el boton de saque
const sacar = document.getElementById("sacar");

//-- Botón de saque:
//-- Dar a la bola una velocidad inicial
//-- También restablecemos la posicion inicial
sacar.onclick = () => {
  bola_y = 50;
  bola_vy = 6;
  console.log("Saque!");
}

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {

    //-- Tecla ESPACIO: Saque
    case " ":
      bola_y = 50;
      bola_vy = 6;
  }
}

