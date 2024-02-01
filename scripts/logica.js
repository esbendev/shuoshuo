const obj = listaCompletaDeDatos;
// const obj = JSON.parse(listaCompletaDeDatos);

let indiceActual = 0;
var indiceMax = obj.length;
let indiceMin = 0;
let ordenDeTarjetas = new Set();

let datosTarjetaActual = document.getElementById("tarjeta-actual");
let caracteres = document.getElementById("caracteres");
let definicion = document.getElementById("definicion");
let pinyin = document.getElementById("pinyin");
let botonNoSe = document.getElementById("boton_no-se");
let botonChequear = document.getElementById("boton_chequear");
let botonSiguiente = document.getElementById("boton_siguiente");
let inputUsuario = document.getElementById("inputUsuario");

function cargarTarjetaActual() {
    console.log("ordenDeTarjetas:" + ordenDeTarjetas);
    console.log("indiceActual:" + indiceActual);
    console.log("tarjetaActual: " + [...ordenDeTarjetas][indiceActual]);
    console.log("word: |" + obj[[...ordenDeTarjetas][indiceActual]]["word"] + "|");
    console.log("pinyin: |" + obj[[...ordenDeTarjetas][indiceActual]]["pinyin"] + "|");
    console.log("meaning: |" + obj[[...ordenDeTarjetas][indiceActual]]["meaning"] + "|");

    caracteres.innerHTML = "<p>" + obj[[...ordenDeTarjetas][indiceActual]]["word"] + "</p>";
    datosTarjetaActual.innerHTML = "<p>" + (indiceActual + 1) + " of " + indiceMax + "</p>";
}

function mostrarRespuesta() {
    pinyin.innerHTML = "<p>" + obj[[...ordenDeTarjetas][indiceActual]]["pinyin"] + "</p>";
    definicion.innerHTML = "<p>" + obj[[...ordenDeTarjetas][indiceActual]]["meaning"] + "</p>";
}

function generarOrdenDeTarjetas(rango, cantidad) {
    var i = 0;
    while (ordenDeTarjetas.size < cantidad) {
        ordenDeTarjetas.add(Math.floor(Math.random() * (rango - 1 + 1)));
    }
}

function proximaTarjeta() {
    if (indiceActual < indiceMax - 1) {
        indiceActual += 1;
    } else {
        indiceActual = indiceMin;
    }
}

function borrar() {
    caracteres.innerHTML = "<p></p>";
    pinyin.innerHTML = "<p></p>";
    definicion.innerHTML = "<p></p>";
    inputUsuario.value = "";
}

function noSe() {
    mostrarRespuesta();
}

function chequear() {
    respuestaUsuario = inputUsuario.value;
    respuestaCorrecta = obj[[...ordenDeTarjetas][indiceActual]]["word"];
    if (respuestaCorrecta == respuestaUsuario) {
        inputUsuario.classList.add("correcto");
        mostrarRespuestaBotonSiguiente();
    } else {
        //incorrecto - mal, muestro respuesta
        // console.log("incorrecto");
        inputUsuario.classList.add("incorrecto");
        mostrarRespuesta();
    }
}

generarOrdenDeTarjetas(indiceMax, indiceMax);
cargarTarjetaActual();


function botonesControl() {
    botonChequear.classList.remove("esconder_boton");
    botonNoSe.classList.remove("esconder_boton");
    botonSiguiente.classList.add("esconder_boton");
}

function botonesSiguiente() {
    botonChequear.classList.add("esconder_boton");
    botonNoSe.classList.add("esconder_boton");
    botonSiguiente.classList.remove("esconder_boton");
}

function mostrarRespuestaBotonSiguiente() {
    //correcto - bien, pasamos a la próxima
    console.log("correcto");
    botonesSiguiente();
    mostrarRespuesta();
}

function clickEnSiguiente() {
    proximaTarjeta();
    borrar();
    cargarTarjetaActual();
    botonesControl();
    inputUsuario.classList.remove("correcto");
}

//para los botones
function verTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (botonChequear.classList.contains("esconder_boton")) {
            botonSiguiente.click();
        } else {
            botonChequear.click();
        }
    } else {
        inputUsuario.classList.remove("correcto");
        inputUsuario.classList.remove("incorrecto");
    }
}