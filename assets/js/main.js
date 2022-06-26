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
    constructor(talla, color, frase) {
        this.talla = talla;
        // this.precio = precio;
        this.color = color;
        // this.bordados = bordados;
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
//  ------------   COLOR SECTION  ---------------
//Botones para selecciona el color
let colorSerenity = document.getElementById('colorSerenity');
let colorSnorkelBlue = document.getElementById('colorSnorkelBlue');
let colorGreenFlash = document.getElementById('colorGreenFlash');
let colorLilacGray = document.getElementById('colorLilacGray');
let colorPeachEcho = document.getElementById('colorPeachEcho');
let colorRoseQuartz = document.getElementById('colorRoseQuartz');
const coloresDisponibles = ['colorSerenity', 'colorSnorkelBlue', 'colorGreenFlash', 'colorLilacGray', 'colorPeachEcho', 'colorRoseQuartz'];
//Funciones de botones para seleccionar color
colorSerenity.onclick = function() {seleccionarColor('colorSerenity')};
colorSnorkelBlue.onclick =  function() {seleccionarColor('colorSnorkelBlue')};
colorGreenFlash.onclick =  function() {seleccionarColor('colorGreenFlash')};
colorLilacGray.onclick =  function() {seleccionarColor('colorLilacGray')};
colorPeachEcho.onclick =  function() {seleccionarColor('colorPeachEcho')};
colorRoseQuartz.onclick =  function() {seleccionarColor('colorRoseQuartz')};
// Escoger color de la chamarra
function seleccionarColor(color) {
            color_pedido = color;
            coloresDisponibles.forEach(blockOtherColors);
}
function blockOtherColors(thiscolor) {
    if (color_pedido != thiscolor) {
        // document.getElementById(thiscolor).classList.add('disabled');
        document.getElementById(thiscolor).classList.remove('selected');
    } else {
        document.getElementById(thiscolor).classList.add('selected');
        // document.getElementById(thiscolor).classList.remove('disable');
        console.log('El color seleccionado fue: ', thiscolor);
    }
}
// -------------  SIZE SECTION ----------------
// Botones para seleccionar color
let tallaChica = document.getElementById('chica');
let tallaMediana = document.getElementById('mediana');
let tallaGrande = document.getElementById('grande');
const tallasDisponibles = ['chica', 'mediana', 'grande'];
// Funciones de botones para seleccionar la talla
tallaChica.onclick = function() {seleccionarTalla('chica')};
tallaMediana.onclick =  function() {seleccionarTalla('mediana')};
tallaGrande.onclick =  function() {seleccionarTalla('grande')};
//Escoger talla de la chamarra
function seleccionarTalla(size) {
    talla_pedido = size;
    tallasDisponibles.forEach(blockOtherSizes);
}
function blockOtherSizes(thisSize) {
    if (talla_pedido != thisSize) {
        document.getElementById(thisSize).classList.remove('selected');
    } else {
        document.getElementById(thisSize).classList.add('selected');
        console.log('La talla seleccionada fue: ', thisSize);
    }
}
// ---------------- EMBROIDERY SECTION ---------------
// Botones para seleccionar frases
let aprendeAmar = document.getElementById('Aprende_a_Amar');
let hazloBrillar = document.getElementById('Hazlo_Brillar');
let valoraDias = document.getElementById('Valora_los_dias');
let yoSoy = document.getElementById('Yo_Soy');
const frasesDisponibles = ['Aprende_a_Amar', 'Hazlo_Brillar', 'Valora_los_dias', 'Yo_Soy'];
// Funciones de botones para seleccionar la frase
aprendeAmar.onclick = function() {seleccionarFrase('Aprende_a_Amar')};
hazloBrillar.onclick =  function() {seleccionarFrase('Hazlo_Brillar')};
valoraDias.onclick =  function() {seleccionarFrase('Valora_los_dias')};
yoSoy.onclick = function() {seleccionarFrase('Yo_Soy')};
//Escoger talla de la chamarra
function seleccionarFrase(phrase) {
    frase_pedido = phrase;
    frasesDisponibles.forEach(blockOtherPhrases);
}
function blockOtherPhrases(thisPhrase) {
    if (frase_pedido != thisPhrase) {
        document.getElementById(thisPhrase).classList.remove('selected');
    } else {
        document.getElementById(thisPhrase).classList.add('selected');
        console.log('La frase seleccionada fue: ', thisPhrase);
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

// Codigo de descuento
// function verificarDescuento(precio2) {
//     let descuento = prompt("¿Tienes un código de descuento? ¡Ingresalo aquí!").toLowerCase();
//     if(descuento == 'spookiecookie'){
//         alert("Tu descuento del 15% ha sido aplicado");
//         precio2 = precio2*0.75;
//         return precio2;
//     } else {
//         precio2 = precio2;
//         return precio2;
//     }
// }

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
// let temp1 = escogerTalla(talla_incorrecta);
// let temp2 = escogerColor(color_incorrecto);
// let temp3 = escogerBordados(temp1.precio_pedido, bordados_incorrecto);
// if(temp3.bordados_pedido!='cero'&&temp3.bordados_pedido!=0) {
//     bordado_frase = prompt('¿Qué frase quieres para tu bordado? Puedes elegir de las opciones');
// }  
// let temp4 = verificarDescuento(temp3.pprecio);
// let temp5 = nombrePedido(nompedido);
// let chamarra = crearChamarra(temp1.talla_pedido, temp4, temp2, temp3.bordados_pedido, bordado_frase);
// let pedido = crearPedido(chamarra, temp5);
// pedidos[conteo_pedidos] = pedido;



// Descomentar al final
let realizarPedido = document.getElementById('PedirChamarra');
realizarPedido.onclick = function() {PedirChamarra()};
function PedirChamarra() {
    let chamarra = crearChamarra(talla_pedido, color_pedido, frase_pedido);
    let pedido = crearPedido(chamarra);
    pedidos[conteo_pedidos] = pedido;
    alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con la frase " + pedidos[conteo_pedidos].chamarra.frase + ". Tu total es de: $200 MXN");
}
// alert("Te muestro tu pedido: chamarra de talla " + pedidos[conteo_pedidos].chamarra.talla + " de color " + pedidos[conteo_pedidos].chamarra.color + " con " + pedidos[conteo_pedidos].chamarra.bordados + " bordado(s) a nombre de " + pedidos[conteo_pedidos].nombrede + ". Tu total es de: $" + pedidos[conteo_pedidos].chamarra.precio + "MXN");
// alert("¡Gracias por tu pedido (:!");
// console.log('Ultimo Pedido => número: ' + conteo_pedidos + ' a nombre de: ' + pedidos[conteo_pedidos].nombrede);
// console.log(pedidos[conteo_pedidos].chamarra);




