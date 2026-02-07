function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

/* ROOM DATA */
const roomsData = [
  {
    type: "Deluxe",
    price: 2500,
    img: "images/room1.jpg",
    desc: "Luxury Deluxe Room with modern facilities."
  },
  {
    type: "Premium",
    price: 4000,
    img: "images/bedroom.jpg",
    desc: "Premium Room with premium comfort & view."
  },
  {
    type: "Suite",
    price: 7000,
    img: "images/pool.jpg",
    desc: "Royal Suite with luxury lifestyle experience."
  }
];

function searchRooms() {
  let roomType = document.getElementById("roomType").value;
  let location = document.getElementById("location").value;
  let guests = document.getElementById("guests").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout || !roomType || !location || !guests) {
    alert("Please fill all fields!");
    return;
  }

  let resultDiv = document.getElementById("roomResults");
  resultDiv.innerHTML = "";

  let filtered = roomsData.filter(r => r.type === roomType);

  filtered.forEach(room => {
    let card = document.createElement("div");
    card.className = "room-card";

    card.innerHTML = `
      <img src="${room.img}">
      <div class="room-info">
        <h3>${room.type} Room</h3>
        <p>${room.desc}</p>
        <p><strong>₹${room.price}/night</strong></p>
        <button onclick="selectRoom('${room.type}', ${room.price})">Book Now</button>
      </div>
    `;
    resultDiv.appendChild(card);
  });
}

function selectRoom(type, price) {
  let location = document.getElementById("location").value;
  let guests = document.getElementById("guests").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  let nights = Math.ceil(
    (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24)
  );

  let total = nights * price;

  document.getElementById("sumLocation").innerText = location;
  document.getElementById("sumRoom").innerText = type;
  document.getElementById("sumGuests").innerText = guests;
  document.getElementById("sumCheckin").innerText = checkin;
  document.getElementById("sumCheckout").innerText = checkout;
  document.getElementById("sumPrice").innerText = price;
  document.getElementById("sumTotal").innerText = total;

  document.getElementById("summary").style.display = "block";
  document.getElementById("summary").scrollIntoView({ behavior: "smooth" });
}

/* PAYMENT CONFIRMATION */
function confirmBooking() {
  let method = document.getElementById("paymentMethod").value;
  if (!method) {
    alert("Please select payment method!");
    return;
  }
  alert("🎉 Booking Confirmed! Payment successful via " + method);
}

/* GALLERY MODAL */
function openModal(src) {
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
