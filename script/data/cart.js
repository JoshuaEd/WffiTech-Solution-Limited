export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    // {
    //   id: "fari-headset-034090",
    // },
  ];
}

// Save data
export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
// Adding item to cart
export function addToCart(productId, productName) {
  let matchingItem = "";

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      productName,
      quantity: 1,
    });
  }
  saveToStorage();
}

// Updating cart quantity
export function updateCart(productId, productName) {
  let cartQty = 0;
  cart.forEach((cartItem) => {
    cartQty += cartItem.quantity;
    document.querySelector(".barge-number").innerHTML = cartQty;
  });
}

// Deleting from cart
export function removeFromCart(productId, productName) {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}
