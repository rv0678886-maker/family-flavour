import { db, collection, addDoc } from "./firebase.js";

window.placeOrder = async function () {

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const landmark = document.getElementById("landmark").value.trim();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!name || !phone || !address) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    await addDoc(collection(db, "orders"), {
      name,
      phone,
      address,
      landmark,
      cart,
      payment: "Cash on Delivery",
      deliveryCharge: 10,
      status: "Pending",
      createdAt: new Date().toISOString()
    });

    localStorage.removeItem("cart");
    alert("✅ Order Placed Successfully!");

    window.location.href = "index.html";

  } catch (error) {
    console.error(error);
    alert("❌ Order Failed");
  }
}
