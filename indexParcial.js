
const tienda = (() => {
    const inventario = [{id:0, name:"camisa",price:1.99, stock:2},
    {id:1, name:"pantalon",price:1.99, stock:2},
    {id:2, name:"zapato",price:1.99, stock:2}]
    const carrito = [{id:0, name:"camisa",price:1.99, stock:2},
    {id:1, name:"pantalon",price:1.99, stock:2},
    {id:2, name:"zapato",price:1.99, stock:2}];

    return {
        inventario,carrito
        
    };
});

var agregarProductoCamisa = document.getElementById('agregar');
var agregarProductoPantalon = document.getElementById('agregar1');
var agregarProductoZapatos = document.getElementById('agregar2');
var pago = document.getElementById('pago');

var resultado = document.getElementById("mostrarCarrito")

agregarProductoCamisa.onclick = function (e) {

    resultado.textContent = tienda.carrito
    alert("el producto a sido agregado");
}
agregarProductoPantalon.onclick = function (e) {

    alert("el producto a sido agregado");
}
agregarProductoZapatos.onclick = function (e) {

    alert("el producto a sido agregado");
}
pago.onclick = function (e) {

    alert("pago realizado");
}

console.log(tienda.carrito)
