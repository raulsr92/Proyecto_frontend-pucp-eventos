# GRUPO 2

Proyecto de eventos en la ciudad de Lima

### Páginas referentes: 

|Página             |Enlace         |
|----------------|-------------------------------|
|Joinnus|[Ver 👀](https://www.joinnus.com/)       |
|Teleticket|[Ver 👀](https://teleticket.com.pe/)       |
|Inkafarma|[Ver 👀](https://inkafarma.pe/)     
|Falabella|[Ver 👀](https://www.falabella.com.pe/)       |

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
|1 | **Se imprimien las cards desde JavaScript:** Los eventos se almacenan en el objeto "objEventos". El array se recorre con el método forEach( )    |
|2 | **Agregar productos al carrito de compras:** se ha creado una colección con los botones de "agregar al carrito" de cada card que tienen como propiedad "id" al ID de cada evento, esto para que cada botón quede relacionado con su respectivo evento. Con for se recorren estos botones y se genera el evento click, lo cual detona la función que agrega al carrito que recibe como parámetro ese ID que representa a cada evento. Con el método de los arrays FIND buscamos en el objeto de "carrito de compra" un evento que conincida en su id con el id del boton de agregar al carrto, en pocas palabras estamos buscando si ese evento que estamos agregando ya se encuentra en el carrito. Si es "undefined" significa que es la primera vez que se agrega ese evento al carrito, por lo tanto se agrega al mismo. Por el contrario, si ya existía ese evento en el carrito, solo se suma 1 a la cantidad. La función termina llamando a la f actualizarContadorCarrito(), la que actualiza el valor de elementos en el carrito en total, lo cual se muestra en el boton flotante de home.html |
|3 | **Filtar por categoría:** Recorremos los Radio input de cada categoría en el filtro (que están ocultos) y les aplicamos que escuchen el evento click. Si una categoría es seleccionada (click) para filtrado, se llena la variable "categoriaPorFiltrar" con la categoría correspondiente. Ahora escuchamos el evento click del botón "Aplicar", si no se seleccionó ninguna categoría, sale una alerta que indica ello, pero caso contrario se ejecuta la f filtrarPorCategoria que recibe como argumento la categoría. En esta función utilizamos el método FILTER de los arrays, los cuales nos devolverá el evento o los eventos que coincidan con el nombre de la categoría. ANtes de volver a imprimir los eventos filtrados, limpiamos todas las cards y repetimos el paso para detectar qué evento se ha agregado el carrito |



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