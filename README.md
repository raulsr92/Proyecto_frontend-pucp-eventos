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