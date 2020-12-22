'use strict'
function toThousand(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
};
function parsePrice(x) {
    x.forEach((x, index) => {
    x = x.innerHTML.slice(1);
    x = toThousand(Math.round(x));
    return document.querySelectorAll('.product-money')[index].innerHTML = `$${x}`;
    });
};

window.addEventListener('load', function(){
    let price = document.querySelectorAll('.product-money');
    parsePrice(price);
})