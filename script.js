
const usuarios = [
    {
        id: 1,
        dni: "46890373",
        nombre: "Raul Adolfo",
        apellidos: "Sanchez Rodriguez"
    },
    {
        id: 2,
        dni: "74447486",
        nombre: "Alessandra",
        apellidos: "Valcarcel Diaz"
    }
]

const dniUser = document.getElementById("numero-doc")

const lupaIcon = document.getElementById("form-icon-lupa--container")
console.log(lupaIcon)

function autocompletarUsuario(dniAEvaluar) {
    console.log("Click en lupa")
    const userSelected = usuarios.filter((user)=>user.dni === dniAEvaluar)
    console.log(userSelected)
    



    //Autocompletar

    const cajaNombres = document.getElementById("nombre")
    console.log(userSelected.nombre)
    cajaNombres.value = userSelected[0].nombre

    const cajaApellidos = document.getElementById("apellidos")
    console.log(cajaApellidos)

    cajaApellidos.value = userSelected[0].apellidos
}

lupaIcon.addEventListener("click", ()=>{
    autocompletarUsuario(dniUser.value); // Llamamos la función con ese valor
})

