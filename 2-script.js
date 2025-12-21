const sectionBienvenida = document.getElementById("bienvenida")
const sectionMenu = document.getElementById("menu")
const sectionConsulta = document.getElementById("consulta")
const FormUsuario = document.getElementById("FormUsuario");
const FormContraseña = document.getElementById("FormContraseña");
const contenMenu = document.getElementById("contenMenu")


/* hace en un futuro una version que use return envez de variables globales */
let usuario
let contraseña





function inicio() {

    sectionMenu.style.display = "none"
    sectionConsulta.style.display = "none"

    formularios()

}

function formularios () {
    FormUsuario.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que la página se recargue

    usuario = document.getElementById("usuario").value;
    console.log(usuario); // acá tenés el string
    
})

    FormContraseña.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que la página se recargue

    contraseña = document.getElementById("contraseña").value;
    console.log(contraseña); // acá tenés el string

    menu()
    })


}

function validacion(){} /* este por ahora no existe */

function menu(){

sectionMenu.style.display = "flex"
sectionBienvenida.style.display = "none"

let opciones = 
    `<h1>hola ${usuario} </h1>
    <h2>que desea hacer?</h2>
    <h3>1-Consultar saldo</h3>
    <h3>2-Depositar saldo</h3>
    <h3>3-Retirar saldo</h3>
    <p>4-salir</p>`


contenMenu.innerHTML = opciones


}




inicio()