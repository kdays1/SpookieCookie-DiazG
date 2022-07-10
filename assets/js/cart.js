const cart = [];

function checkCartStorage () {
    if (localStorage.flagCart == 'true') {
        let intheCart = JSON.parse(localStorage.cart);
        let order = 'Chamarra \n tamaño: ' + intheCart[0].talla + '\n color: ' + intheCart[0].color + '\n con la frase: ' + intheCart[0].frase + '. Tu total es de $' + intheCart[0].precio;
        console.log(order);
        document.getElementById("thisCart").innerHTML = order;
    }
}
checkCartStorage ();
// alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con " + pedidos[conteo_pedidos].chamarra.bordados + " bordado(s) a nombre de " + pedidos[conteo_pedidos].nombrede + ". Tu total es de: $" + pedidos[conteo_pedidos].chamarra.precio + "MXN");
// alert("¡Gracias por tu pedido (:!");
// console.log('Ultimo Pedido => número: ' + conteo_pedidos + ' a nombre de: ' + pedidos[conteo_pedidos].nombrede);
// console.log(pedidos[conteo_pedidos].chamarra);