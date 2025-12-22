/* cuesta bastante encontrar buenos nombres para las variables */

const sectionBienvenida = document.getElementById("bienvenida")
const sectionMenu = document.getElementById("menu")
const sectionConsulta = document.getElementById("consulta")
const FormUsuario = document.getElementById("FormUsuario");
const FormContraseña = document.getElementById("FormContraseña");
const contenMenu = document.getElementById("contenMenu")
const contenConsulta = document.getElementById("contenConsulta")


/* hace en un futuro una version que use return envez de variables globales */
let usuario
let contraseña
let saldo = 5999993
let acciones = []


/* objetos de consulta */

class TiposDeConsulta {
    constructor (tipo,id){
        this.tipo = tipo
        this.id = id
    }
}

let consul = new TiposDeConsulta ("una Consulta", "inputConsulta")

let retiro = new TiposDeConsulta ("un retiro", "inputRetiro")

let ingreso = new TiposDeConsulta ("un ingreso", "inputIngreso")

/* con esto subimos estos objetos */
acciones.push(consul,retiro,ingreso)



function inicio() {

    sectionMenu.style.display = "none"
    sectionConsulta.style.display = "none"

    formularios()

}

function formularios () {
    FormUsuario.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que la página se recargue


    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    console.log(usuario,contraseña); // acá tenés el string
    menu()
})

}

function validacion(){} /* este por ahora no existe */

function menu(){

sectionMenu.style.display = "flex"
sectionBienvenida.style.display = "none"

let intro = `<h1>hola ${usuario} </h1>
            <h2>que desea hacer?</h2>
    `
contenMenu.innerHTML += intro

acciones.forEach((accion) => {
let opciones = 
    `
    <input type="radio" id=${accion.id} name="opcion" hidden >
    <label  for=${accion.id}>Pulse Aqui para hacer ${accion.tipo} </label>
    <br></br>
    `
/* el for vincula al label con el input type el cual es mas facil de manejar
para el addEvent */

contenMenu.innerHTML += opciones




});

let opcionConsulta = document.getElementById("inputConsulta")
let opcionRetiro = document.getElementById("inputRetiro")
let opcionIngreso = document.getElementById("inputIngreso")

opcionConsulta.addEventListener("click",consulta)
/* opcionConsulta.addEventListener("click",consulta)
opcionConsulta.addEventListener("click",consulta) */
/* faltan estos */

}

function consulta (){
    sectionMenu.style.display = "none"
    sectionConsulta.style.display ="flex"

    let txt = `<h1>hola su saldo es de $${saldo} </h1>`

    contenConsulta.innerHTML = txt

}





inicio()