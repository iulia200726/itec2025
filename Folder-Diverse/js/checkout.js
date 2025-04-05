// Retrieve cart items and display them
window.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    cartItemsContainer.innerHTML = ""; // Clear previous items

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - ${item.price} ron`;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Function to clear cart
function clearCart() {
    sessionStorage.removeItem("cart");
}

// Checkout function
function checkout() {
    clearCart(); // Clear the cart after checkout
    window.location.href = "payment.html"; // Redirect to the payment page
}

// Event listener for the checkout button
document.getElementById("checkout-button").addEventListener("click", function() {
    checkout();
});
