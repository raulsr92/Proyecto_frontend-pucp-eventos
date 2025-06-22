
const objUsuarios = [
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

const objEventos = [
    {
        id: 1,
        nombre: "Limones, limones, limones, limones, limones de Sam Steiner",
        poster: "./img/eventos/evento1.jpg",
        fecha: "Sábado 26 de Junio",
        hora: "08:30 PM",
        precio: 60
    },
    {
        id: 2,
        nombre: "RIO en concierto | Sideshow ROCKPATRIO",
        poster: "./img/eventos/evento2.jpg",
        fecha: "Sábado 21 de Junio",
        hora: "09:00 PM",
        precio: 89
    },
    {
        id: 3,
        nombre: "Alianza Lima vs Gremio | Copa Conmebol Sudamericana",
        poster: "./img/eventos/evento3.jpg",
        fecha: "Miércoles 16 de Julio",
        hora: "07:30 PM",
        precio: 60
    },
    {
        id: 4,
        nombre: "Festival de Comedia 4",
        poster: "./img/eventos/evento4.jpg",
        fecha: "Jueves 26 de Junio",
        hora: "07:30 PM",
        precio: 60
    },
    {
        id: 5,
        nombre: "CYRANO DE BERGERAC",
        poster: "./img/eventos/evento5.jpg",
        fecha: "Jueve 02 de Octubre",
        hora: "08:00 PM",
        precio: 55
    }, 
    {
        id: 6,
        nombre: "Cecilia Bracamonte | Por mi Perú ",
        poster: "./img/eventos/evento6.jpg",
        fecha: "Domingo 27 de Julio",
        hora: "10:00 PM",
        precio: 68
    },
    {
        id: 7,
        nombre: "Una noche de Salsa 14",
        poster: "./img/eventos/evento7.jpg",
        fecha: "Sábado 28 de Marzo",
        hora: "07:30 PM",
        precio: 97
    },
    {
        id: 8,
        nombre: "Circo de Kiko",
        poster: "./img/eventos/evento8.jpg",
        fecha: "Viernes 25 de Julio",
        hora: "06:00 PM",
        precio: 54
    },       
]


const page = window.location.pathname;


if (page.includes("checkout.html")) {
    

    /*================Funcionalidad: Llenar el combo de paises desde JS, más adelante se puede usar una API ================*/
    /* Explicación: En el formulario de checkout al completar los datos del participante, cuando escribes el nro de documento
        y hacer click en la lupa, si el usuario está registrado imprime los nombres y apellidos, reduciendo el tiempo de escritura
        del usuario*/


// Detectar usuario en compra (checkout.html)

        const dniUser = document.getElementById("numero-doc")
        console.log(dniUser)

        const lupaIcon = document.getElementById("form-icon-lupa--container")
        console.log(lupaIcon)

        function autocompletarUsuario(dniAEvaluar) {
            console.log("Click en lupa")
            const userSelected = objUsuarios.filter((user)=>user.dni === dniAEvaluar)
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



} else if (page.includes("registrar.html")) {

    // Arrays de objetos que representan un país

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

    /*================Funcionalidad: Llenar el combo de paises desde JS, más adelante se puede usar una API ================*/

    // Capturar el combo (select) de países

    const comboPaises = document.getElementById("pais-input");
    console.log(comboPaises)


    // Funcion para ordernar cualquier array de objetos por la propiedad que se desee

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

    // LLenar el combo de países del formulario de registro


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


    /*================Funcionalidad: Registrar Usuario ================*/

    let objUsers = JSON.parse(localStorage.getItem("users")) || [];

    console.log(objUsers)

    const btnRegister = document.getElementById("btn-registro-user")
    console.log(btnRegister)

  
    btnRegister.addEventListener("click", (e) => {
        e.preventDefault()

        let nombreUser = document.getElementById("nombre-input").value.trim();
        let apellidoUser = document.getElementById("apellido-input").value.trim();
        let docUser = document.getElementById("dni-input").value.trim();
        let emailUser = document.getElementById("correo-input").value.trim();
        let passwordUser = document.getElementById("contra-input").value.trim();
        let paisUser = document.getElementById("pais-input").value.trim();
        let sexoUser = document.getElementById("sexo-input").value.trim();


        //Validación de campos

         if (!nombreUser || !apellidoUser || !docUser || !emailUser || !passwordUser) {
            alert("Completa todos los campos obligatorios.");
            
            return;
        }

        // Validar si correo ya ha sido registrado

        let usuariosActuales = JSON.parse(localStorage.getItem("users"))|| []
        
        let existeCorreo = usuariosActuales.some( (user) =>{
            return user.correo == emailUser
         } )

        console.log(existeCorreo);

        if(existeCorreo){
            alert(`El correo ${emailUser} ya ha sido registrado `);

            document.getElementById("formulario-user").reset()
            return
        }

        //Validación de checkbox
        let checkbox1 = document.getElementById("terminos-condiciones")
        let checkbox2 = document.getElementById("trat-datos")
        //let checkbox3 = document.getElementById("info-eventos") /*Este no es obligatorio*/

        if (!checkbox1.checked || !checkbox2.checked ) {
            alert("Tiene que leer y aceptar los terminos y condiciones y la politica de tratamiento de datos antes de registrarse ")
            
            document.getElementById("formulario-user").reset()
            return
        }

        //Luego de validaciones, agregar un nuevo objeto al array 

        objUsers.push(
            {
                id: objUsers.length+1,
                nombre: nombreUser,
                apellidos: apellidoUser,
                dni: docUser,
                correo: emailUser,
                password: passwordUser,
                pais: paisUser,
                sexo: sexoUser,
            }
        )

        console.log(objUsers)

        localStorage.setItem("users",JSON.stringify(objUsers))  

        alert("Usuario registrado exitosamente 🚀")

        document.getElementById("formulario-user").reset()
    })
} else if (page.includes("home.html")){
    
    /*================Funcionalidad: Imprimir cards desde JS ================*/

    let cardsContainer = document.querySelector(".cards-container");

    let imprimirCards = ()=>{
        objEventos.forEach((evento)=>{
            cardsContainer.innerHTML += 
            `
            <article class="event-card">
                <div class="event-card--media">
                    <img src="${evento.poster}" alt="Evento ${evento.id}">
                </div>

                <div class="event-card--info">
                    <h3>${evento.nombre}</h3>
                    <div class="evento-info--date">
                        <i class="fa-regular fa-calendar"></i>
                        <p>${evento.fecha} - ${evento.hora}</p>
                    </div>

                    <div class="evento-info--cantidad">
                        <p>S/ ${evento.precio}.00</p>
                        <div>
                            <i class="fa-solid fa-circle-minus icon-minus"></i>
                            <span>0</span>
                            <i class="fa-solid fa-circle-plus icon-plus"></i>
                        </div>
                    </div>
                    <div class="evento-info--cta">
                        <i class="fa-solid fa-heart icon-heart"></i>
                        <a href="#" class="btn-carrito">
                            <i class="fa-solid fa-cart-plus"></i>
                            Agregar al carrito
                        </a>
                    </div>          
                </div>
            </article>
        `
        })
    }

    imprimirCards()

}


