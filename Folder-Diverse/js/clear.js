window.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
    
    document.getElementById("checkout-button").addEventListener("click", function() {
        checkout();
    });

    document.getElementById("clear-cart-button").addEventListener("click", function() {
        clearCart();
        displayCartItems(); // Refresh the displayed cart after clearing
    });
});

// Function to clear cart
function clearCart() {
    sessionStorage.removeItem("cart");
}