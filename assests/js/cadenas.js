const parrafo = document.getElementById("parrafo");
const boton = document.querySelector("button");

const caracter1 = document.getElementById("caracter1");
const caracter2 = document.getElementById("caracter2");
const caracter3 = document.getElementById("caracter3");
const caracter4 = document.getElementById("caracter4");
const caracter5 = document.getElementById("caracter5");

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

//MAN675847583748sjt567654; Manchester Piccadilly
//GNF576746577363dhg23465s; Greenfield
//LIV63748827374trye738837; Liverpool Lime Street
//SYB4ferydh5tisztTs56478f; Stalybridge
//HUD7tyu64776490uHjGghut4; Huddersfiel

//MAN: Manchester Piccadilly

let variable1 ="MAN675847583748sjt567654;Manchester Piccadilly"
console.log(variable1);

let Man1 = "MAN675847583748sjt567654";
let Man2 = "; Manchester Piccadilly";
let ManCompleto = Man1.slice(0,3);
Man2 = Man2.replace(";",":");
caracter1.textContent = ManCompleto + Man2;

//codigo2 GNF576746577363dhg23465s; Greenfield

let Gnf1 = "GNF576746577363dhg23465s";
let Gnf2 = "; Greenfield";
let GnfCompleto = Gnf1.slice(0,3);
Gnf2 = Gnf2.replace(";",":");
caracter2.textContent = GnfCompleto + Gnf2;

//codigo 3 LIV63748827374trye738837; Liverpool Lime Street

let liv1 = "LIV63748827374trye738837";
let liv2 = "; Liverpool Lime Street";
let livCompleto = liv1.slice (0,3);
liv2 = liv2.replace(";",":");
caracter3.textContent = livCompleto + liv2;

//codigo 4 SYB4ferydh5tisztTs56478f; Stalybridge

let syb1= "SYB4ferydh5tisztTs56478f";
let syb2 = "; Stalybridge ";
let sybCompleto = syb1.slice (0,3);
syb2 = syb2.replace(";",":");
caracter4.textContent = sybCompleto + syb2;

//codigo 5 HUD7tyu64776490uHjGghut4; Huddersfiel

let hud1 = "HUD7tyu64776490uHjGghut4"
let hud2 = "; Stalybridge ";
let hudCompleto = hud1.slice (0,3);
hud2 = hud2.replace (";",":");
caracter5.textContent = hudCompleto + hud2;


