//FUNCIONES

//Función de bievenida
function saludo(){
    let nombre = prompt("Ingresá tu nombre.")
    alert(
        "Hola! " + nombre + ", bienvenid@ a la casa de instrumentos musicales Creedence ♫ "
    )
    alert(
        "Es esta página encontrás lo mejor para hace tu música "
    )

}

//Clase
class Drums{
    constructor(nombre, precio, color){
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
}
}

let Drum = [
    { nombre:"Gretsch", precio:"100000", Color: "Roja"},
    { nombre:"DW", precio:"120000", Color: "Verde"},
    { nombre:"TAMA", precio:"150000", Color: "Azul"}
]

function cargarInstrumento() {
    let nombre  = prompt(`
    Selecciona tu nuevo instrumento (Escribir la opción a continuación):
    Gretsch
    DW
    TAMA

    0: Salir
    `)
    switch (nombre) { 
        case "Gretsch":
            alert("Elegiste Bateria Gretsch")
            break;
        case "DW":
            alert("Elegiste Bateria DW")
            break;
        case "TAMA":
            alert("Elegiste Bateria TAMA")
            break;
        case "0":
            alert("¡Gracias por visitar la Casa de Instrumentos musicales Creedence!")
            break;
    
        default:
            alert("Ingresá una opción válida")
            break;
    };
    let precio  = parseInt(prompt("Ingresá el precio la batería. Gretsch: 100000 (+ iva) / DW:150000 (+ iva) / TAMA: 120000 (+ iva)"));
    let color = prompt(`Ingresá el color la batería
    Selecciona el color de tu Bateria (Escribir la opción a continuación):
    Gretsch Roja
    DW Verde
    TAMA Azul

    0: Salir`)
    switch (color) { 
        case "Gretsch Roja":
            alert("Elegiste Bateria Gretsch Roja")
            break;
        case "DW Verde":
            alert("Elegiste Bateria DW Verde")
            break;
        case "TAMA Azul":
            alert("Elegiste Bateria TAMA Azul")
            break;
        case "0":
            alert("¡Gracias por visitar la Casa de Instrumentos musicales Creedence!")
            break;
    
        default:
            alert("Ingresá una opción válida")
            break;
    };
    const nuevaDrum = new Drums(nombre, precio, color);
    arrayCarrito.push(nuevaDrum);
    alert("Añadiste tu nuevo instumento al carrito!");
}

function verCarrito(){
    arrayCarrito.forEach((nuevaDrum) => {
        alert(`Elegiste la Bateria ${nuevaDrum.nombre} color ${nuevaDrum.color} por un precio de ${nuevaDrum.precio} + iva`);
    }); 
}

function finalizarOperacion() {
    const total = arrayCarrito.reduce((acc, el) => acc + el.precio * iva, 0);
    alert(`Gracias por eleginos! El monto total a pagar es ${total}`)
}

let arrayCarrito =[];

let detallesCompra = prompt(
    "Ingresá una opción: \ 1: Cargar instrumentos \ 2: Ver Cariito\ 3: Finalizar operación"
);

const iva = 1.21;
saludo()

while (detallesCompra !== "3") {
    if (detallesCompra === "1") {
        cargarInstrumento(arrayCarrito);
    }
    if (detallesCompra === "2") {
        verCarrito();
    }
    if (detallesCompra === "3") {
        finalizarOperacion();
    }
    detallesCompra = prompt("Ingresá nuavemente \ 1: Seguir comprando instrumentos \ 2: Ver Carrito\ 3: Finalizar operación")
}

alert("¡Gracias por visitar la Casa de Instrumentos musicales Creedence!")

