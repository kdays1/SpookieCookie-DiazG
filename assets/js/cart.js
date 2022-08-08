const cart = [];
var order = [];
var elementHijo = [];
var contenedor, dentroContenedor, contenido;
var total = 0;
var suma = [];

function deleteAnItem (theNumber) {
    let toDelete = document.getElementById("div"+theNumber);
    toDelete.remove();
}

function checkCartStorage () {
    if (localStorage.flagCart == 'true') {
        var notBuy = document.getElementById('notBuy');
        notBuy.classList.add('donotshow');
        let intheCart = JSON.parse(localStorage.cart);
        for (i=0; i<intheCart.length; i++) {
            order = 'Chamarra tamaño: ' + intheCart[i].talla + ' color: ' + intheCart[i].color + ' con la frase: ' + intheCart[i].frase + '. Tu total es de $' + intheCart[i].precio;
            contenedor = document.getElementById("thisCart");
            numeracion = document.createElement("span");
            num = document.createTextNode(i+") ");
            numeracion.appendChild(num);
            contenedor.appendChild(numeracion);
            dentroContenedor = document.createElement("div");
            dentroContenedor.setAttribute("id","div"+i);
            contenedor.appendChild(dentroContenedor);
            contenido = document.createTextNode(order);
            dentroContenedor.appendChild(contenido);
            division = document.createElement("hr");
            dentroContenedor.appendChild(division);
            console.log(order);
            suma[i] = parseInt(intheCart[i].precio, 10);
            total = total + suma[i];
            deleteItem = document.createElement("button");
            deleteItem.setAttribute("id","btn" + i);
            contenedor.appendChild(deleteItem);
            deleteItem.addEventListener("click",deleteAnItem(i))
        }
        // document.getElementById("thisCart").innerHTML = order;
        totalElement = document.createElement("div");
        totalContenido = document.createTextNode('Tu total es de: $'+ total);
        totalElement.appendChild(totalContenido);
        contenedor.appendChild(totalElement);
    }
}
checkCartStorage ();


// alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con " + pedidos[conteo_pedidos].chamarra.bordados + " bordado(s) a nombre de " + pedidos[conteo_pedidos].nombrede + ". Tu total es de: $" + pedidos[conteo_pedidos].chamarra.precio + "MXN");
// alert("¡Gracias por tu pedido (:!");
// console.log('Ultimo Pedido => número: ' + conteo_pedidos + ' a nombre de: ' + pedidos[conteo_pedidos].nombrede);
// console.log(pedidos[conteo_pedidos].chamarra);