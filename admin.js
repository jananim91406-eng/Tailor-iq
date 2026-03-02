function goHome() {
  window.location.href = "index.html";
}

// Get stored orders from localStorage
const orders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersList = document.getElementById("ordersList");

orders.forEach(order => {
  const li = document.createElement("li");
  li.textContent = `${order.name} - ${order.service} - ${order.phone}`;
  ordersList.appendChild(li);
});
