let product = [];
let total = 0;

function add(product, price) {
    console.log(product, price)
    product.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = 'Pagar $${total}'
}
function pay() {
    console.log(product, price)
    window.alert(product.join(", \n"));

}
