console.log("Ejecutando JS...");



display = document.getElementById("display")
igual = document.getElementById("igual")
del = document.getElementById("del")
clear = document.getElementById("clear")


//-- Operación para detectar numero

let digitos=document.getElementsByClassName("digito")
console.log(digitos)

for(i = 0; i < digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    digit(ev.target);
  }
}

//-- Operación de sumar, restar, multiplicar y dividir
let funciones=document.getElementsByClassName("funcion")
console.log(funciones)


for(i = 0; i < funciones.length; i++){
  funciones[i].onclick = (ev) =>{
    funcion(ev.target);
  }
}

const estado = {
  ini: 0,
  dig1: 1,
  signo: 2,
  dig2_ini: 3,
  dig2: 4,
}

let valor = estado.ini;

//-- Operación operar con numero
function numerico(num)
{
  if(display.innerHTML == "0"){
    display.innerHTML = num.value;
  }else{
  display.innerHTML += num.value;
  }
}



igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}


//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  valor = estado.ini;
}

//-- Para poder borrar
del.onclick = () => {
    if(display.innerHTML == "0"){
      display.innerHTML = "0";
      valor = estado.ini;
    }else{
      display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    }
  }


function digit(dig){
    if (valor == estado.ini) {
      display.innerHTML = dig.value;
      valor = estado.dig1;
    } else if (valor == estado.dig1){
      display.innerHTML += dig.value;
    } else if (valor == estado.signo){
      display.innerHTML += dig.value;
      valor = estado.dig2_ini;
    } else if (valor == estado.dig2_ini){
      display.innerHTML += dig.value;
      valor = estado.dig2;
    } else if (valor == estado.dig2){
      display.innerHTML += dig.value;
    }
} 

function funcion (sig)
{
  //-- Segun el estado hacemos una cosa u otra
  if (valor != estado.signo){
    display.innerHTML += sig.value;
    valor = estado.signo;
  }
}