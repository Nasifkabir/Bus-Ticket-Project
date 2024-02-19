let seatLeft = 40;
let seatBook = 0;
let total = 0;
let discount = 0;
const seatArr = [];

const phoneNum = document.getElementById("phone-number");
phoneNum.addEventListener("input", function () {
  if (seatBook >= 1 && phoneNum.value.length !== 0) {
    next.removeAttribute("disabled");
  }
});

// Coupon code apply
const apply = document.getElementById("apply");
apply.addEventListener("click", function () {
  const couponCode = document.getElementById("coupon").value;
  if (couponCode === "NEW15") {
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.classList.add("hidden");
    const discountContainer = document.getElementById("discount-container");
    discountContainer.classList.remove("hidden");
    discountAmount = (total * 15) / 100;
    discount = Math.floor(discountAmount);
    document.getElementById("discount").innerText = discount;
    const grand = total - discount;
    document.getElementById("grand-total").innerText = grand;
  } else if (couponCode === "Couple 20") {
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.classList.add("hidden");
    const discountContainer = document.getElementById("discount-container");
    discountContainer.classList.remove("hidden");
    discountAmount = total * 0.2;
    discount = Math.floor(discountAmount);
    document.getElementById("discount").innerText = discount;
    const grand = total - discount;
    document.getElementById("grand-total").innerText = grand;
  } else {
    alert("Invalid Coupon Code!");
    document.getElementById("coupon").value = "";
  }
});

// Each seat
const seats = document.getElementsByClassName("seats");
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    if (seatBook < 4) {
      if (!seatArr.includes(seat.innerText)) {
        seatArr.push(seat.innerText);

        seat.style.backgroundColor = "#1DD100";
        seat.classList.add("text-white");
        seatBook++;
        seatLeft--;
        // Updating the counter
        document.getElementById("seat-book").innerText = seatBook;
        document.getElementById("seat-left").innerText = seatLeft;
        const p1 = document.createElement("p");
        p1.innerText = seat.innerText;
        const p2 = document.createElement("p");
        p2.innerText = "  " + "Economy";
        const p3 = document.createElement("p");
        p3.innerText = "550";

        // Creating new section for seat details
        const div = document.createElement("div");
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add("flex");
        div.classList.add("items-center");
        div.classList.add("justify-between");

        const seatDetail = document.getElementById("seat-detail");
        seatDetail.appendChild(div);

        // Updating the price of ticket
        const price = 550;
        total += price;
        document.getElementById("total-price").innerText = total;
        // Calculating total discount
        const apply = document.getElementById("apply");
        if (seatBook === 4) {
          apply.removeAttribute("disabled");
        }
        // Grand total
        const grand = total - discount;
        document.getElementById("grand-total").innerText = grand;

        // functioning next button
        seat.addEventListener("click", function (event) {
          // Existing seat booking logic...

          // Update the 'functioning next button' logic here
          const phoneNum = document.getElementById("phone-number").value;
          const next = document.getElementById("next");
          if (seatBook >= 1 && phoneNum.length !== 0) {
            next.removeAttribute("disabled");
          }
        });
      } else {
        event.stopPropagation();
      }
    } else {
      alert(`Dear customer, only 4 tickets can be purchased at a time.`);
    }
  });
}
