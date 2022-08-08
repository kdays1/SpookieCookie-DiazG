const cart = [];
var order = [];
var elementHijo = [];
var contenedor, dentroContenedor, contenido;
var total = 0;
var newTotal = 0; 
var suma = [];
var newSuma = [];
var intheCart;

function checkTheStorage () {
    if (localStorage.flagCart == 'true') {
        linkToCart = document.getElementById('theCart');
        let intheCart = JSON.parse(localStorage.cart);
        let howMany = intheCart.length;
        linkToCart.innerHTML = "Carrito (" + howMany + ")";
    } else {
        linkToCart = document.getElementById(theCart);
        linkToCart.innerHTML = "Carrito";
    }
}

checkTheStorage();

function updateLocalS() {
    localStorage.setItem('cart', JSON.stringify(intheCart));
    for (var i=0; i<intheCart.length; i++) {
        newSuma[i] = parseInt(intheCart[i].precio, 10);
        newTotal = newTotal + newSuma[i];
    }
    checkTheStorage();
    nuevototalContenido = 'Tu total es de: $'+ newTotal;
    elementoTotal = document.getElementById("elTotalSumado");
    elementoTotal.innerHTML = nuevototalContenido;
}

function deleteAnItem (theNumber) {
    let toDelete = document.getElementById("div"+theNumber);
    toDelete.remove();
    // intheCart = JSON.parse(localStorage.cart);
    intheCart.splice(theNumber, 1);
    // delete intheCart[theNumber];
    updateLocalS();
}

function checkCartStorage () {
    if (localStorage.flagCart == 'true') {
        var notBuy = document.getElementById('notBuy');
        notBuy.classList.add('donotshow');
        intheCart = JSON.parse(localStorage.cart);
        for (i=0; i<intheCart.length; i++) {
            order = 'Chamarra tamaño: ' + intheCart[i].talla + ' color: ' + intheCart[i].color + ' con la frase: ' + intheCart[i].frase + '. Tu total es de $' + intheCart[i].precio;
            // full container
            contenedor = document.getElementById("thisCart");
            numeracion = document.createElement("span");
            // item container
            dentroContenedor = document.createElement("div");
            dentroContenedor.setAttribute("id","div"+i);
            contenedor.appendChild(dentroContenedor);
            // item in cart
            contenido = document.createTextNode(order);
            dentroContenedor.appendChild(contenido);
            console.log(order);
            suma[i] = parseInt(intheCart[i].precio, 10);
            total = total + suma[i];
            // delete button for item
            deleteItem = document.createElement("button");
            deleteItem.setAttribute("id","btn" + i);
            deleteItem.setAttribute("onclick", "deleteAnItem("+i+")");
            deleteItem.classList.add("btn-primary");
            deleteItem.innerHTML = "Eliminar";
            dentroContenedor.appendChild(deleteItem);
            // division for next item or total
            division = document.createElement("hr");
            dentroContenedor.appendChild(division);
        }
        // document.getElementById("thisCart").innerHTML = order;
        totalElement = document.createElement("div");
        totalElement.setAttribute("id", "elTotalSumado");
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