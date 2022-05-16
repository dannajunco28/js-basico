const parrafo = document.getElementById("parrafo");

const boton = document.querySelector("button");

let cita1 = "Caminando en línea recta ";
let cita2 = "no puede uno llegar muy lejos";
// concatenar cadenas
let citaCompleta = cita1 + cita2 + ". Cita del principio.";
parrafo.textContent = citaCompleta;

boton.onclick = function() {
    let nombre = prompt("¿Cual es su nombre?");
    alert("Hola " + nombre + ", encantado de conocerlo.");
}

//Concatenar números

// citaCompleta += 234;
// parrafo.textContent = citaCompleta;


let miFecha = "20" + "05";
let miNumero = Number(miFecha);
console.log(typeof miFecha);
console.log(typeof miNumero);
// parrafo.textContent = miFecha;
// parrafo.textContent = miNumero + 5;

//Longitud de una cadena

let longitud = citaCompleta.length;
console.log(longitud);
console.log(citaCompleta[longitud -1])
//esta es para hacerlo resumidamente en una linea de codigo
console.log(citaCompleta[citaCompleta.length -1])

// Encontrar una subcadena dentro de una cadenas

let indice = citaCompleta.indexOf("linea recta");
console.log(indice);

console.log(citaCompleta.slice(0,9))

let cortado = citaCompleta.slice(10,12)
console.log(cortado)

let mayus =citaCompleta.toUpperCase();
parrafo.textContent = mayus;
let minus = citaCompleta.toLowerCase();
parrafo.textContent =minus;

// Actulizar partes de cadenas de

citaCompleta = citaCompleta.replace("uno", "alguien")
parrafo.textContent = citaCompleta;

//Ejercicios

//MAN675847583748sjt567654;Manchester Piccadilly
//GNF576746577363dhg23465s;Greenfield
//LIV63748827374trye738837;Liverpool Lime Street
//SYB4ferydh5tisztTs56478f;Stalybridge
//HUD7tyu64776490uHjGghut4;Huddersfiel

//MAN; Manchester Piccadilly

let variable ="MAN675847583748sjt567654;Manchester Piccadilly"
console.log(variable)






