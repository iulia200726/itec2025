function searchProducts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const products = document.querySelectorAll(".grid-item");
  
    products.forEach((product) => {
      const productName = product.querySelector("h2").textContent.toLowerCase();
      if (productName.includes(input)) {
        product.style.display = "block"; // Afișează produsul
      } else {
        product.style.display = "none"; // Ascunde produsul
      }
    });
  }