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

let opciones = 
    `
    <h1>hola ${usuario} </h1>
    <h2>que desea hacer?</h2>

    <input type="radio" id="inputConsulta" name="opcion" hidden >
    <label  for="inputConsulta">Aqui para la consultar</label>
    
    `
/* el for vincula al label con el input type el cual es mas facil de manejar
para el addEvent */

contenMenu.innerHTML = opciones
let opcionConsulta = document.getElementById("inputConsulta")
opcionConsulta.addEventListener("click",consulta)


}

function consulta (){
    sectionMenu.style.display = "none"
    sectionConsulta.style.display ="flex"

    let txt = `<h1>hola su saldo es de $${saldo} </h1>`

    contenConsulta.innerHTML = txt

}




inicio()