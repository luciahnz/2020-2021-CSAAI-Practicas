console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
del = document.getElementById("del")
clear = document.getElementById("clear")


//-- Operación para detectar numero

let digitos=document.getElementsByClassName("digito")

for(i = 0; i < digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    digito(ev.target);
  }
}


//-- Operación de sumar, restar, multiplicar y dividir
let funciones=document.getElementsByClassName("funcion")

for(i = 0; i < funciones.length; i++){
  funciones[i].onclick = (ev) =>{
    display.innerHTML += ev.target.value;
  }
}


//-- Operación operar con numero
function digito(num)
{
  if(display.innerHTML == "0"){
    display.innerHTML = num.value;
  }else{
  display.innerHTML += num.value;
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}


//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}

//-- Para poder borrar
del.onclick = () => {
    if(display.innerHTML == "0"){
      display.innerHTML = "0";
    }else{
      display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    }
  }