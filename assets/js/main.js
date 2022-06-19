let precio_pedido;
let talla_pedido;
let color_pedido;
let bordados_pedido;
let talla_incorrecta = true;
let color_incorrecto = true;
let bordados_incorrecto = true;
let nombre_incorrecto = true;
let conteo_pedidos = 0;
let pedidos = {};
let bordado_frase = 'sin frase';
let nompedido = undefined;

// Clase chamarra
class Chamarra {
    constructor(talla, precio, color, bordados, frase) {
        this.talla = talla;
        this.precio = precio;
        this.color = color;
        this.bordados = bordados;
        this.frase = frase;
    }
}
// Clase Pedido
class Pedido {
    constructor(chamarra, nombrede) {
        this.chamarra = chamarra;
        this.nombrede = nombrede;
    }
}

//Buscar pedido
function buscarPorPedido(index) {
    return pedidos[index];
}
//Buscar con filtrado
function buscarPorFiltro(pedidos,filtros) {
    // return pedidos.filter(pedidos => pedidos.chamarra.filtro = vfiltro);
    return pedidos.filter(function(obj) {
        return Object.keys(filtros).every(function(c) {
            return obj[c] == filtros[c];
        });
    });
}

// Escoger talla de la chamarra
function escogerTalla(talla_incorrecta){
    while (talla_incorrecta) {
        let talla = prompt("¡Te ayudaré a comprar una chamarra! ¿Qué talla eres?").toLowerCase();
        let tempo1;
        switch(talla) {
            case 'chica':
                talla_pedido = 'chica';
                precio_pedido = 150;
                console.log('talla' + talla_pedido + 'precio' + precio_pedido);
                talla_incorrecta = false;
                tempo1 = {talla_pedido, precio_pedido};
                return tempo1;
            case 'ch':
                talla_pedido = 'chica';
                precio_pedido = 175;
                console.log('talla ' + talla_pedido + ' precio ' + precio_pedido);
                talla_incorrecta = false;
                tempo1 = {talla_pedido, precio_pedido};
                return tempo1;
            case 'mediana':
                talla_pedido = 'mediada';
                precio_pedido = 200;
                console.log('talla ' + talla_pedido + ' precio ' + precio_pedido);
                talla_incorrecta = false;
                tempo1 = {talla_pedido, precio_pedido};
                return tempo1;
            case 'm':
                talla_pedido = 'mediada';
                precio_pedido = 150;
                console.log('talla ' + talla_pedido + ' precio ' + precio_pedido);
                talla_incorrecta = false;
                tempo1 = {talla_pedido, precio_pedido};
                return tempo1;
            case 'grande':
                talla_pedido = 'grande';
                precio_pedido = 200;
                console.log('talla ' + talla_pedido + ' precio ' + precio_pedido);
                talla_incorrecta = false;
                tempo1 = {talla_pedido, precio_pedido};
                return tempo1;
            case 'g':
                talla_pedido = 'grande';
                precio_pedido = 200;
                console.log('talla ' + talla_pedido + ' precio ' + precio_pedido);
                talla_incorrecta = false;
                tempo1 = {talla_pedido, precio_pedido};
                return tempo1;
            default:
                alert("Sólo contamos con estas tallas: chica, mediana y grande");
        }
    }
}
// Escoger color de la chamarra
function escogerColor(color_incorrecto) {
    while (color_incorrecto) {
        let color = prompt("¿De qué color quieres tu chamarra? Hay lila, verde, rosa y azul").toLowerCase();
        switch(color) {
            case 'azul':
                color_pedido = 'azul';
                color_incorrecto = false;
                return color_pedido;
            case 'rosa':
                color_pedido = 'rosa';
                color_incorrecto = false;
                return color_pedido;
            case 'verde':
                color_pedido = 'verde';
                color_incorrecto = false;
                return color_pedido;
            case 'lila':
                color_pedido = 'lila';
                color_incorrecto = false;
                return color_pedido;
            default:
                alert("Sólo contamos con estos colores: azul, rosa, verde y lila");
        }
    }
}
// Escoger cantidad de bordados
function escogerBordados(pprecio, bordados_incorrecto) {
    while (bordados_incorrecto) {
        let bordados = prompt("¿Qué cantidad de bordados vas a querer? Puede ser 0, 1 o 2").toLowerCase();
        let tempo2;
        switch(bordados) {
            case '1':
                bordados_pedido = bordados;
                pprecio = pprecio + 20;
                bordados_incorrecto = false;
                tempo2 = {bordados_pedido, pprecio};
                return tempo2;
            case 'uno':
                bordados_pedido = 'un';
                pprecio = pprecio + 20;
                bordados_incorrecto = false;
                tempo2 = {bordados_pedido, pprecio};
                return tempo2; 
            case '2':
                bordados_pedido = bordados;
                pprecio = pprecio + 40;
                bordados_incorrecto = false;
                tempo2 = {bordados_pedido, pprecio};
                return tempo2; 
            case 'dos':
                bordados_pedido = bordados;
                pprecio = pprecio + 40;
                bordados_incorrecto = false;
                tempo2 = {bordados_pedido, pprecio};
                return tempo2;
            case '0':
                bordados_pedido = bordados;
                bordados_incorrecto = false;
                pprecio = pprecio;
                tempo2 = {bordados_pedido, pprecio};
                return tempo2;
            case 'cero':
                bordados_pedido = bordados;
                bordados_incorrecto = false;
                pprecio = pprecio;
                tempo2 = {bordados_pedido, pprecio};
                return tempo2;
            default:
                alert("Sólo aceptamos las siguientes cantidades de bordados: cero, uno y dos");
        }
    }
}
// Codigo de descuento
function verificarDescuento(precio2) {
    let descuento = prompt("¿Tienes un código de descuento? ¡Ingresalo aquí!").toLowerCase();
    if(descuento == 'spookiecookie'){
        alert("Tu descuento del 15% ha sido aplicado");
        precio2 = precio2*0.75;
        return precio2;
    } else {
        precio2 = precio2;
        return precio2;
    }
}
//Crear nombre del pedido
function nombrePedido(nompedido) {
    while (nompedido==undefined) {
        nompedido = prompt('¿A nombre de quién quedará el pedido?'); 
        if (nompedido==undefined) {
            alert('Debes ingresar un nombre para continuar (:')
        } else {
            return nompedido;
        }
    }
    return nompedido;
}

// Crear objeto Chamarra
function crearChamarra (talla, precio, color, bordados, frase) {
    const chamarra = new Chamarra(talla, precio, color, bordados, frase);
    return chamarra;
}

//Crear objeto Pedido
function crearPedido (chamarra, nombrede) {
    const pedido = new Pedido(chamarra, nombrede);
    return pedido;
}

// Codigo
let temp1 = escogerTalla(talla_incorrecta);
let temp2 = escogerColor(color_incorrecto);
let temp3 = escogerBordados(temp1.precio_pedido, bordados_incorrecto);
if(temp3.bordados_pedido!='cero'&&temp3.bordados_pedido!=0) {
    bordado_frase = prompt('¿Qué frase quieres para tu bordado? Puedes elegir de las opciones');
}  
let temp4 = verificarDescuento(temp3.pprecio);
let temp5 = nombrePedido(nompedido);
let chamarra = crearChamarra(temp1.talla_pedido, temp4, temp2, temp3.bordados_pedido, bordado_frase);
let pedido = crearPedido(chamarra, temp5);
// pedidos = pedidos.push(pedido);
pedidos[conteo_pedidos] = pedido;
alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con " + pedidos[conteo_pedidos].chamarra.bordados + " bordado(s) a nombre de " + pedidos[conteo_pedidos].nombrede + ". Tu total es de: $" + pedidos[conteo_pedidos].chamarra.precio + "MXN");
alert("¡Gracias por tu pedido (:!");
    console.log('Ultimo Pedido => número: ' + conteo_pedidos + ' a nombre de: ' + pedidos[conteo_pedidos].nombrede);
console.log(pedidos[conteo_pedidos].chamarra);




