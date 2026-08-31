import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let checkoutHTML = "";

cart.forEach((cartItem) => {
  // Use cartItem.productId instead of cartItem.id
  const productId = cartItem.productId;
  console.log(cartItem)
  let matchingProduct;

  products.forEach((product) => {
    if (product.productId === productId) {
      matchingProduct = product;
    }

  });

  console.log(matchingProduct);


});

//document.querySelector(".checkout-summary-container").innerHTML += checkoutHTML;
