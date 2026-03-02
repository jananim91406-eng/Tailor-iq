const form = document.getElementById("orderForm");
const ordersList = document.getElementById("ordersList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;

  const li = document.createElement("li");
  li.textContent = `${name} - ${service} - ${phone}`;

  ordersList.appendChild(li);

  form.reset();
});
