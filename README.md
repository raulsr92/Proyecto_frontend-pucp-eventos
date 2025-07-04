# GRUPO 2

Proyecto de eventos en la ciudad de Lima

### Páginas referentes: 

|Página             |Enlace         |
|----------------|-------------------------------|
|Joinnus|[Ver 👀](https://www.joinnus.com/)       |


### Integrantes y división del trabajo:

Trabajaron en la entrega del día 22/06/25: Raúl, Fredy, Alex, Diego


### Filtros escogidos:


|N° | Filtro  |
|----------------|-------------------------------|
|1 |Filtro por Categoría      |
|2 | Filtro por Lugar |
|3 | Filtro por Fecha 

### Funcionalidades elaboradas:

|N° | Ffuncionalidad |
|----------------|-------------------------------|
|1 | **Registro de usuarios:** Los usuarios se pueden registrar en la página registral.html. Estos usuarios se van a almacenar en el localStorage como "users"   |
|2 | **Login:** Los usuarios inician sesión cuando se verifica que ambos campos (correo y password) estén llenos y también se valida que el usuario exista a través del correo registrado. Si el usuario exista se valida que la contraseña sea la almacenada. Si usuario y contraseña con correctos se muestra un mensaje de bienvenida y se redirige al usuario al HOME. Cuando un usuario inicia sesión, se almacena en el objeto de local Storage "usuarioSesion"   |
|3 | **Se imprimien las cards de eventos desde JavaScript:** Los eventos se almacenan en el objeto "objEventos". El array se recorre con el método forEach( )    |
|4 | **Agregar productos al carrito de compras:** se ha creado una colección con los botones de "agregar al carrito" de cada card que tienen como propiedad "id" al ID de cada evento, esto para que cada botón quede relacionado con su respectivo evento. Con for se recorren estos botones y se genera el evento click, lo cual detona la función que agrega al carrito que recibe como parámetro ese ID que representa a cada evento. Con el método de los arrays FIND buscamos en el objeto de "carrito de compra" un evento que conincida en su id con el id del boton de agregar al carrto, en pocas palabras estamos buscando si ese evento que estamos agregando ya se encuentra en el carrito. Si es "undefined" significa que es la primera vez que se agrega ese evento al carrito, por lo tanto se agrega al mismo. Por el contrario, si ya existía ese evento en el carrito, solo se suma 1 a la cantidad. La función termina llamando a la f actualizarContadorCarrito(), la que actualiza el valor de elementos en el carrito en total, lo cual se muestra en el boton flotante de home.html |
|5 | **Filtar por categoría:** Recorremos los Radio input de cada categoría en el filtro (que están ocultos) y les aplicamos que escuchen el evento click. Si una categoría es seleccionada (click) para filtrado, se llena la variable "categoriaPorFiltrar" con la categoría correspondiente. Ahora escuchamos el evento click del botón "Aplicar", si no se seleccionó ninguna categoría, sale una alerta que indica ello, pero caso contrario se ejecuta la f filtrarPorCategoria que recibe como argumento la categoría. En esta función utilizamos el método FILTER de los arrays, los cuales nos devolverá el evento o los eventos que coincidan con el nombre de la categoría. ANtes de volver a imprimir los eventos filtrados, limpiamos todas las cards y repetimos el paso para detectar qué evento se ha agregado el carrito |
|6 | **Imprimir objetos del carrito en la página carrito de compras:** Al hacer click en el botón flotante del carrito de comprar en el home, pasamos a la página de carrito de compras. Aqui capturamos el contenedor de los eventos del carrito y los imprimimos desde JS ya que la cantidad de eventos en carrito será variable según el usuario y su decisón de compra. Para esto recorremos en objeto carrito del localStorage y con el metodo FIND buscamos los eventos que coincida en ID con el array de objeto de todos los con el objetivo de ir almacenando en cada iteración el evento presente en carrito con su información completa (ya que en carrito solo se almacena el ID y cantidad) para luego imprimir los eventos con la estructura y estilos css deseados |
|7 | **Ventana fija de resumen de compra:** En la pantalla de carrito de compras, en la parte inferior se muestra una venta fijada con position "fixed" que nos muestra el total de nuestra compra, al desplegarla haciendo click en el icono de flecha hacia arriba, nos muestra el resumen mas detallado de la compra. Esta ventan en sus 2 versiones (short y large) se renderizan desde JS gracias a las f cantidadItemsEnCarrito y montoTotalEnCarrito, valiendo mencionar que en un primero instante la versión large está oculta porque se le estableció un display none desde JS y luego con eventos click en los iconos de flecha se expanda y contrae la version large. |

### Solución de Errores:

🚩Error N° 01 solucionado: Cuando hacía el filtrado y volvía a imprimir las cards, ya no podia agregar eventos al carrito
Solución: 
El problema ocurre porque cuando filtras por categoría y vuelves a imprimir las tarjetas (imprimirCards(objEventosFiltrado)), los nuevos botones de "Agregar al carrito" no tienen los event listeners asignados nuevamente.

Cuando cargas la página por primera vez, asignas los event listeners a los botones con este código:

for (let i = 0; i < botonesCart.length; i++) {
    botonesCart[i].addEventListener("click", (e) => {
        e.preventDefault();
        let idEvento = botonesCart[i].id;
        agregarAlCarrito(idEvento);
    });
}

Pero cuando filtras y vuelves a imprimir las tarjetas, los botones cambian y los event listeners anteriores ya no están asignados a los nuevos elementos del DOM.

Solución: 
Volver a asignar los event listeners después de filtrar
Después de llamar imprimirCards(objEventosFiltrado), debes volver a capturar los botones y asignarles los event listeners:

¿Por qué funciona esta solución?
✅ Cada vez que filtras, los botones cambian, por lo que necesitas volver a capturarlos ✅ Los nuevos botones ahora tienen los event listeners correctamente asignados ✅ El carrito sigue funcionando después de filtrar

Ahora, cuando filtras por categoría, los botones de "Agregar al carrito" seguirán funcionando correctamente. 🚀