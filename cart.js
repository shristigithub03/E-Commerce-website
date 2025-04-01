console.clear();

// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cartContainer");
let totalItem = document.getElementById("totalItem");
let totalAmount = 0;

// Update the total item count in the cart
totalItem.innerText = `Total Items: ${cart.length}`;

// Create the cart display container
let boxContainerDiv = document.createElement("div");
boxContainerDiv.id = "boxContainer";

// Function to dynamically render cart items
function dynamicCartSection(item, index) {
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("cart-item");
    
    let boxImg = document.createElement("img");
    boxImg.src = item.image;
    boxImg.alt = item.name;
    boxImg.style.width = "100px";
    boxImg.style.height = "100px";
    boxImg.style.borderRadius = "5px";

    let boxh3 = document.createElement("h3");
    boxh3.innerText = `${item.name} × 1`;

    let boxh4 = document.createElement("h4");
    boxh4.innerText = `Amount: Rs ${item.price}`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.onclick = function () {
        removeFromCart(index);
    };

    boxDiv.appendChild(boxImg);
    boxDiv.appendChild(boxh3);
    boxDiv.appendChild(boxh4);
    boxDiv.appendChild(removeButton);

    boxContainerDiv.appendChild(boxDiv);
}

// Function to update the total amount display
function amountUpdate(amount) {
    let totalContainerDiv = document.createElement("div");
    totalContainerDiv.id = "totalContainer";

    let totalDiv = document.createElement("div");
    totalDiv.id = "total";

    let totalh2 = document.createElement("h2");
    totalh2.innerText = "Total Amount";

    let totalh4 = document.createElement("h4");
    totalh4.innerText = `Amount: Rs ${amount}`;

    let buttonDiv = document.createElement("div");
    buttonDiv.id = "button";

    let buttonTag = document.createElement("button");
    buttonTag.innerText = "Place Order";
    buttonTag.onclick = function () {
        placeOrder();
    };

    buttonDiv.appendChild(buttonTag);
    totalDiv.appendChild(totalh2);
    totalDiv.appendChild(totalh4);
    totalDiv.appendChild(buttonDiv);
    totalContainerDiv.appendChild(totalDiv);
    cartContainer.appendChild(totalContainerDiv);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// Function to handle order placement
function placeOrder() {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cart");
    location.href = "/orderPlaced.html";
}

// Load and display cart items
cartContainer.appendChild(boxContainerDiv);
cart.forEach((item, index) => {
    dynamicCartSection(item, index);
    totalAmount += item.price;
});

// Update the total amount
amountUpdate(totalAmount);
