function checkTheStorage () {
    if (localStorage.flagCart == 'true') {
        linkToCart = document.getElementById(theCart);
        let intheCart = JSON.parse(localStorage.cart);
        let howMany = intheCart.length;
        linkToCart.innerHTML.replace = "Carrito (" + howMany + ")";
    } else {
        linkToCart = document.getElementById(theCart);
        linkToCart.innerHTML.replace = "Carrito";
    }
}

checkTheStorage();