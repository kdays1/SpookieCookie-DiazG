const cart = [];
var order = [];
var elementHijo = [];
var contenedor, dentroContenedor, contenido;

function checkCartStorage () {
    if (localStorage.flagCart == 'true') {
        let intheCart = JSON.parse(localStorage.cart);
        for (i=0; i<intheCart.length; i++) {
            order = 'Chamarra tamaño: ' + intheCart[i].talla + ' color: ' + intheCart[i].color + ' con la frase: ' + intheCart[i].frase + '. Tu total es de $' + intheCart[i].precio;
            contenedor = document.getElementById("thisCart");
            dentroContenedor = document.createElement("div");
            contenedor.appendChild(dentroContenedor);
            contenido = document.createTextNode(order);
            dentroContenedor.appendChild(contenido);
        }
        console.log(order);
        // document.getElementById("thisCart").innerHTML = order;
    }
}
checkCartStorage ();
// alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con " + pedidos[conteo_pedidos].chamarra.bordados + " bordado(s) a nombre de " + pedidos[conteo_pedidos].nombrede + ". Tu total es de: $" + pedidos[conteo_pedidos].chamarra.precio + "MXN");
// alert("¡Gracias por tu pedido (:!");
// console.log('Ultimo Pedido => número: ' + conteo_pedidos + ' a nombre de: ' + pedidos[conteo_pedidos].nombrede);
// console.log(pedidos[conteo_pedidos].chamarra);