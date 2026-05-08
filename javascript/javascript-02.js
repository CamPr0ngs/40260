/* let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")
let b0 = document.getElementById("b0")
 */

let resultado = document.getElementById("resultado");
let num1 = 0;
let operacion = "";

let botones = document.getElementsByTagName("button");

for (const key in botones) {
    if (Object.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];        
        if (boton.className != "operadores") {
            boton.addEventListener("click", escribirNumero);
        } else {
            boton.addEventListener("click", manejarOperador);
        }
    }
}

function escribirNumero(e) {    
    resultado.value += e.target.innerText;
}

function manejarOperador(e) {
    let valorBoton = e.target.innerText;

    if (valorBoton === "CE") {        
        resultado.value = "";
        num1 = 0;
        operacion = "";
    } else if (valorBoton === "=") {        
        ejecutarOperacion();
    } else {        
        num1 = parseFloat(resultado.value);
        operacion = valorBoton;
        resultado.value = ""; 
    }
}

function ejecutarOperacion() {
    let num2 = parseFloat(resultado.value);
    let total = 0;

    switch (operacion) {
        case "+":
            total = num1 + num2;
            break;
        case "-":
            total = num1 - num2;
            break;
        case "*":
            total = num1 * num2;
            break;
        case "/":
            total = num1 / num2;
            break;
    }
    
    resultado.value = total;    
    num1 = total;
    operacion = "";
}