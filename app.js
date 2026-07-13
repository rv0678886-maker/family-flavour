let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " Added to Cart");
}
function placeOrder(){

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let address=document.getElementById("address").value;

let landmark=document.getElementById("landmark").value;

if(name==""||phone==""||address==""){

alert("Please fill all details");

return;

}

alert("Order Placed Successfully!\n\nCash on Delivery");

localStorage.removeItem("cart");

window.location="index.html";

}
