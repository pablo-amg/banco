const sectionBienvenida = document.getElementById("bienvenida")
const sectionMenu = document.getElementById("menu")
const sectionConsulta = document.getElementById("consulta")
const FormUsuario = document.getElementById("FormUsuario");
const FormContraseña = document.getElementById("FormContraseña");


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
    })

}

function validacion(){} /* este por ahora no existe */

function menu(){

sectionMenu.style.display = "flex"


}




inicio()