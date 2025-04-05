// Define your items with their prices
const items = [
  { name: "Placă video ASUS", price: 450 },
  { name: "Placă video MSI", price: 400 },
  { name: "Placă video GIGABYTE", price: 500 },
  { name: "Cooler Corsair", price: 400 },
  { name: "Cooler Cooler Master", price: 400 }
];

// Initialize PayPal button with the total amount
initPayPalButton(items);

// PayPal button initialization function
function initPayPalButton(items) {
  const totalPrice = calculateTotalPrice(items);
  
  paypal
    .Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "vertical",
        label: "paypal",
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{ amount: { currency_code: "USD", value: totalPrice } }],
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          // Full available details
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2)
          );

          // Show a success message within this page, for example:
          const element = document.getElementById("paypal-button-container");
          element.innerHTML = "";
          element.innerHTML = "<h3>Thank you for your payment!</h3>";

          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      },

      onError: function(err) {
        console.log(err);
      },
    })
    .render("#paypal-button-container");
}

// Function to calculate the total sum of prices
function calculateTotalPrice(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
