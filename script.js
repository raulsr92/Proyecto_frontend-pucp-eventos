
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
        nombreCorto: "Limones, limones, limones...",
        categoria: "Teatro",
        poster: "./img/eventos/evento1.jpg",
        fecha: "Sábado 26 de Junio",
        hora: "08:30 PM",
        precio: 60
    },
    {
        id: 2,
        nombre: "RIO en concierto | Sideshow ROCKPATRIO",
        nombreCorto:"RIO en concierto...",
        categoria: "Conciertos",
        poster: "./img/eventos/evento2.jpg",
        fecha: "Sábado 21 de Junio",
        hora: "09:00 PM",
        precio: 89
    },
    {
        id: 3,
        nombre: "Alianza Lima vs Gremio | Copa Conmebol Sudamericana",
        nombreCorto:"Alianza Lima vs Gremio | Copa...",
        categoria: "Deportes",
        poster: "./img/eventos/evento3.jpg",
        fecha: "Miércoles 16 de Julio",
        hora: "07:30 PM",
        precio: 60
    },
    {
        id: 4,
        nombre: "Festival de Comedia 4",
        nombreCorto:"Festival de Comedia 4",
        categoria: "Stand up",
        poster: "./img/eventos/evento4.jpg",
        fecha: "Jueves 26 de Junio",
        hora: "07:30 PM",
        precio: 60
    },
    {
        id: 5,
        nombre: "CYRANO DE BERGERAC",
        nombreCorto:"CYRANO DE BERGERAC",        
        categoria: "Teatro",
        poster: "./img/eventos/evento5.jpg",
        fecha: "Jueve 02 de Octubre",
        hora: "08:00 PM",
        precio: 55
    }, 
    {
        id: 6,
        nombre: "Cecilia Bracamonte | Por mi Perú ",
        nombreCorto:"Cecilia Bracamonte | Por...",        
        categoria: "Conciertos",
        poster: "./img/eventos/evento6.jpg",
        fecha: "Domingo 27 de Julio",
        hora: "10:00 PM",
        precio: 68
    },
    {
        id: 7,
        nombre: "Una noche de Salsa 14",
        nombreCorto:"Una noche de Salsa 14",        
        categoria: "Conciertos",
        poster: "./img/eventos/evento7.jpg",
        fecha: "Sábado 28 de Marzo",
        hora: "07:30 PM",
        precio: 97
    },
    {
        id: 8,
        nombre: "Circo de Kiko",
        nombreCorto:"Circo de Kiko",        
        categoria: "Circos",
        poster: "./img/eventos/evento8.jpg",
        fecha: "Viernes 25 de Julio",
        hora: "06:00 PM",
        precio: 54
    },       
]

let carrito = JSON.parse(localStorage.getItem("carritoInfo")) || [];

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

    let imprimirCards = (array)=>{
        array.forEach((evento)=>{
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
                        <a href="#" class="btn-carrito" id="${evento.id}">
                            <i class="fa-solid fa-cart-plus"></i>
                            Agregar al carrito
                        </a>
                    </div>          
                </div>
            </article>
        `
        })
    }

    imprimirCards(objEventos)

    console.log("en home.html")

    /*================Funcionalidad: Agregar productos al carrito ================*/

    /*El array de objetos en local storage del carrito se creó en la parte global para acceder desde cualquier página */
    /*Capturo a todos los botones de "Agregar al carrito" en un array*/

    let botonesCart = document.getElementsByClassName("btn-carrito")
    console.log(botonesCart)

    for (let i = 0; i < botonesCart.length; i++) {
        
        /*Imprimimos el ID de evento al que pertenece cada boton*/
        console.log(botonesCart[i].id)

        botonesCart[i].addEventListener("click", (e)=>{
            e.preventDefault();
            let idEvento = botonesCart[i].id
            agregarAlCarrito(idEvento)
        } )
        
    }

    let agregarAlCarrito = (idEvento) =>{

        let busquedaEventoEnCarrito = carrito.find((event)=>event.id===idEvento)
        console.log(busquedaEventoEnCarrito)

        if(busquedaEventoEnCarrito === undefined){
            carrito.push(
                {
                    id: idEvento,
                    cantidad: 1,
                }
            )
        } else{
            busquedaEventoEnCarrito.cantidad = busquedaEventoEnCarrito.cantidad+1;
        }

        console.log(carrito)

        /*Agregar al carrito el evento*/
        localStorage.setItem("carritoInfo",JSON.stringify(carrito))  

        actualizarContadorEnCarrito();

        console.log("Mi carrito de eventos:")
        console.log(JSON.parse(localStorage.getItem("carritoInfo")))
    }

    /*================Funcionalidad: Actualizar contador de carrito ================*/


    let cantidadItemsEnCarrito =()=>{
        let cantidad=0;
        carrito.forEach((evento)=>{

            cantidad += evento.cantidad

        })
        console.log(cantidad)

        return cantidad
    }

    let contadorCarrito = document.querySelector(".contador-eventos")

    let actualizarContadorEnCarrito =() =>{
        contadorCarrito.innerHTML=cantidadItemsEnCarrito();
    }

    actualizarContadorEnCarrito()

    /*================Funcionalidad: Filtrar por Categoria ================*/

    /*Atrapar los checkbox*/
    
    let checkBoxFiltros = document.getElementsByClassName("checkBoxFiltroCate")  
    console.log(checkBoxFiltros)  

    let btnFiltar = document.querySelector(".btn-filtro-aplicar")
    console.log(btnFiltar)

    let categoriaPorFiltrar;


    for (let i = 0; i < checkBoxFiltros.length; i++) {

        console.log(checkBoxFiltros[i])


        checkBoxFiltros[i].addEventListener("click", ()=>{

                    /*Determinar el filtro a realizar*/ 
            switch (i) {
                case 0:
                    categoriaPorFiltrar= "Conciertos"
                    break;
                case 1:
                    categoriaPorFiltrar= "Teatro"
                    break;  
                case 2:
                    categoriaPorFiltrar= "Stand up"
                    break; 
                case 3:
                    categoriaPorFiltrar= "Deportes"
                    break;  
                case 4:
                    categoriaPorFiltrar= "Circos"
                    break;  
                default:
                    break;
            }    
            console.log(categoriaPorFiltrar)       
        })  
    }

    

    btnFiltar.addEventListener("click", ()=>{

            if (categoriaPorFiltrar!=undefined) {
                filtrarPorCategoria(categoriaPorFiltrar)


            } else{
                alert("No ha seleccionado ninguna categoría")
            }
    })

        
    let filtrarPorCategoria = (categoria)=>{
        
        let objEventosFiltrado = objEventos.filter((evento)=> evento.categoria == categoria)

        console.log(objEventosFiltrado)

        cardsContainer.innerHTML=""

        imprimirCards(objEventosFiltrado)

        let botonesCart = document.getElementsByClassName("btn-carrito")
            console.log(botonesCart)

        for (let i = 0; i < botonesCart.length; i++) {
        
            /*Imprimimos el ID de evento al que pertenece cada boton*/
            console.log(botonesCart[i].id)

            botonesCart[i].addEventListener("click", (e)=>{
                e.preventDefault();
                let idEvento = botonesCart[i].id
                agregarAlCarrito(idEvento)
        } )
        
    }

    }
    


} else if (page.includes("carritoDeCompras.html")){

    /*================Funcionalidad: Imprimir eventos en el carrito ================*/

    let carritoCardsContainer = document.querySelector(".cards-carrito-container")
    console.log(carritoCardsContainer)

    console.log(carrito)

    let imprimirCarrito = () =>{
        carrito.forEach((evento)=>{
            let eventoEnCarrito = objEventos.find((eventoBuscado)=>eventoBuscado.id == evento.id)
            console.log(eventoEnCarrito)

            /*Destructurando las propiedades necesarias del evento encontrado que cumpla con el ID del carrito*/ 
            let {nombre,nombreCorto,poster, precio,categoria} =eventoEnCarrito
            
            carritoCardsContainer.innerHTML += 
            `
                <article class="carrito-card">
                        <div class="carrito-card-section1">
                            <div class="carrito-card-img-container">
                                <img src="${poster}" alt="">
                            </div>
                            <div class="carrito-card-info-container">
                                <h4 class="product-big">${nombre}</h4>
                                <h4 class="product-small">${nombreCorto}</h4>
                                <p>${categoria}</p>
                            </div>
                            <div class="carrito-card-icon-container">
                                <i class="fa-solid fa-circle-xmark delete-icon"></i>
                            </div>
                        </div>
    
                        <div class="carrito-card-section2">
                            <p>S/ ${precio}</p>
                            <div>
                                <i class="fa-solid fa-circle-minus icon-minus"></i>
                                <span>${evento.cantidad}</span>
                                <i class="fa-solid fa-circle-plus icon-plus"></i>
                            </div>
                        </div>
                </article>
            `
        })

    }

    imprimirCarrito();


    /*================Funcionalidad: Imprimir ventana de total a pagar en pantallas de móviles y tables ================*/


    let cantidadItemsEnCarrito =()=>{
        let cantidad=0;
        carrito.forEach((evento)=>{

            cantidad += evento.cantidad

        })
        console.log(cantidad)

        return cantidad
    }

    let montoTotalEnCarrito =()=>{
        let total=0;
        carrito.forEach((evento)=>{
                let eventoEnCarrito = objEventos.find((eventoBuscado)=>eventoBuscado.id == evento.id)
                console.log(eventoEnCarrito)

                /*Destructurando las propiedades necesarias del evento encontrado que cumpla con el ID del carrito*/ 
                let {precio} =eventoEnCarrito

                total += (evento.cantidad * precio) 
                console.log(total)       
            }
        )
        return total
    }
    
    let resumenCompraSmall = document.getElementById("resumen-compra-short")
    console.log(resumenCompraSmall)


    let imprimirResumenSmall = ()=>{
        resumenCompraSmall.innerHTML= 
        `
                <div class="resumen-container">
                    <div class="resumen-eventos">
                        <div class="resumen-eventos-total">
                            <p>Total:</p>
                            <p>S/ ${montoTotalEnCarrito()}</p>
                        </div>
                        <a class="btn-main" href="./checkout.html">Continuar compra</a>
                    </div>
                    <div class="icon-container-up">
                        <i class="fa-solid fa-chevron-up arrow-up-icon"></i>
                    </div>
                </div> 
        `
    }

    imprimirResumenSmall()
    
    /*================Funcionalidad: Al hacer click en icono para expandir la ventana de detalle de compra se pueda ver su versión extendida (pantallas para móviles y tablets) ================*/

    let resumenCompraLarge = document.getElementById("resumen-compra-large")

    let imprimirResumenLarge = ()=>{
        resumenCompraLarge.innerHTML= 
        `
                <div class="resumen-container">
                    <div class="resumen-eventos">
                        <div class="cantidad-eventos">
                            <p>Eventos (${cantidadItemsEnCarrito()})</p>
                        </div>

                        <div class="eventos-detalle-container">
                      
                        </div>

                        <div class="resumen-eventos-total">
                            <p>Total:</p>
                            <p>S/ ${montoTotalEnCarrito()}</p>
                        </div>
                        <a class="btn-main" href="">Continuar compra</a>
                    </div>
                    <div class="icon-container-down">
                        <i class="fa-solid fa-chevron-down arrow-down-icon"></i>
                    </div>
                </div>
        `
    }

    imprimirResumenLarge()

    let contenedorDetalleCart = document.querySelector(".eventos-detalle-container")
    console.log(contenedorDetalleCart)

    let imprimirDetalleCarrito = () =>{
        carrito.forEach((evento)=>{

            let eventoEnCarrito = objEventos.find((eventoBuscado)=>eventoBuscado.id == evento.id)
            console.log(eventoEnCarrito)

            /*Destructurando las propiedades necesarias del evento encontrado que cumpla con el ID del carrito*/ 
            let {nombre,nombreCorto,precio} =eventoEnCarrito
            
            contenedorDetalleCart.innerHTML += 
            `
                    <div class="detalle-card-resumen">
                        <p class="evento-name product-big">${nombre}</p>
                        <p class="evento-name product-small">${nombreCorto}</p>
                        <p>S/ ${precio}.00 </p>
                        <p>x${evento.cantidad}</p>
                    </div>   
            `
        })
    } 

    imprimirDetalleCarrito()

    /*Ocultamos ymostramos la ventana de detalle extendida (large)*/
    
    let detalleLarge = document.getElementById("resumen-compra-large")
    let detalleShort = document.getElementById("resumen-compra-short")

    let iconExpandir = document.querySelector(".icon-container-up")
    console.log(iconExpandir)
    let iconComprimir = document.querySelector(".icon-container-down")
    console.log(iconComprimir)

    detalleLarge.style.display="none"
    detalleShort.style.display="flex"

    iconExpandir.addEventListener("click",()=>{
        detalleLarge.style.display="flex"
        detalleShort.style.display="none"
    })


    iconComprimir.addEventListener("click",()=>{
        detalleLarge.style.display="none"
        detalleShort.style.display="flex"
    })

    /*================ Funcionalidad: borrar eventos del carrito ================ */

    let iconDeleteEventoDeCarrito = document.getElementsByClassName("carrito-card-icon-container")
    console.log(iconDeleteEventoDeCarrito)

    for (let i = 0; i < iconDeleteEventoDeCarrito.length; i++) {
        
        console.log(iconDeleteEventoDeCarrito[i])

        iconDeleteEventoDeCarrito[i].addEventListener("click", (e)=>{
            e.preventDefault();
            eliminarDelCarrito(i)
        } )
        
    }

    let eliminarDelCarrito = (id) =>{

        carrito = carrito.filter((evento, posicion)=> posicion != id )
    
        localStorage.setItem("carritoInfo",JSON.stringify(carrito)) 

        console.log("Mi carrito de eventos:")
        console.log(JSON.parse(localStorage.getItem("carritoInfo")))

        location.reload();
    }
}


