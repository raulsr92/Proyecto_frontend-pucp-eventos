
// Arrays de objetos del proyecto
const objPaises = [
    {
        nombre: "Ecuador",
        capital: "Quito",
        value: "ecuador",
    },
    {
        nombre: "Colombia",
        capital: "Bogotá",
        value: "colonbia",
    },
    {
        nombre: "Argentina",
        capital: "Buenos Aires",
        value: "argentina",
    },
    {
        nombre: "Perú",
        capital: "Lima",
        value: "peru",
    },
    {
        nombre: "Chile",
        capital: "Santiago De Chile",
        value: "chile",
    }
    
]

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



// Capturar los combos

const comboPaises = document.getElementById("pais-input");
console.log(comboPaises)


// Funcion para ordernar cualquier arrat de objetos por la propiedad que se desee

let odernarArrayObjs = (array, propertyName) =>{

    const arraySorted = array.sort((a,b)=>{

        const propA = a[propertyName];
        const propB = b[propertyName];

        if (typeof propA === 'string' && typeof propB === 'string') {
            return propA.localeCompare(propB);
        }


        if (typeof propA === 'number' && typeof propB === 'number') {
        return propA - propB;
        }

        return 0

    } );

    return arraySorted
}

console.log(odernarArrayObjs(objPaises, "nombre"))


odernarArrayObjs(objPaises)

// LLenar los combos


objPaises.forEach((pais)=>{
    comboPaises.innerHTML += 
    `
        <option value="${pais.value}">${pais.nombre}</option>   
    `
})

// Colocar a Perú primero en el combo

let peruSelected = objPaises.find((pais)=>pais.nombre == "Perú")

console.log(peruSelected)

comboPaises.selectedIndex=objPaises.indexOf(peruSelected)


// Detectar usuario en compra (checkout.html)


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

