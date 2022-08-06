const cart = [];
var order = [];
var elementHijo = [];
var contenedor, dentroContenedor, contenido;
var total = 0;
var suma = [];

function checkCartStorage () {
    if (localStorage.flagCart == 'true') {
        var notBuy = document.getElementById('notBuy');
        notBuy.classList.add('donotshow');
        let intheCart = JSON.parse(localStorage.cart);
        for (i=0; i<intheCart.length; i++) {
            order = 'Chamarra tamaño: ' + intheCart[i].talla + ' color: ' + intheCart[i].color + ' con la frase: ' + intheCart[i].frase + '. Tu total es de $' + intheCart[i].precio;
            contenedor = document.getElementById("thisCart");
            dentroContenedor = document.createElement("div");
            contenedor.appendChild(dentroContenedor);
            contenido = document.createTextNode(order);
            dentroContenedor.appendChild(contenido);
            division = document.createElement("hr");
            dentroContenedor.appendChild(division);
            console.log(order);
            suma[i] = parseInt(intheCart[i].precio, 10);
            total = total + suma[i];
        }
        // document.getElementById("thisCart").innerHTML = order;
        totalElement = document.createElement.apply("div");
        totalContenido = document.createTextNode('Tu total es de: '+ total);
        totalElement.appendChild(totalContenido);
        contenedor.appendChild(totalElement);
    }
}
checkCartStorage ();
// alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con " + pedidos[conteo_pedidos].chamarra.bordados + " bordado(s) a nombre de " + pedidos[conteo_pedidos].nombrede + ". Tu total es de: $" + pedidos[conteo_pedidos].chamarra.precio + "MXN");
// alert("¡Gracias por tu pedido (:!");
// console.log('Ultimo Pedido => número: ' + conteo_pedidos + ' a nombre de: ' + pedidos[conteo_pedidos].nombrede);
// console.log(pedidos[conteo_pedidos].chamarra);