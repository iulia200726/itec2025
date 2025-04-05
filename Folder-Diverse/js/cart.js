function addToCart(productName, productPrice) {
  console.log(`Adding ${productName} to cart with price ${productPrice} ron`);
  const cartItem = { name: productName, price: productPrice };
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(cartItem);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} a fost adăugat în coș!`);
}
