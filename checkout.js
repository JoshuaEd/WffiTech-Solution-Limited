import { cart, removeFromCart, saveToStorage } from "../data/cart.js";
import { products } from "../data/products.js";

let cartSummaryHTML = "";
cart.forEach((cartItem) => {
  let productId = cartItem.productId;

  let matchingProduct;
  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
    console.log(products);
  });
  cartSummaryHTML += `
                <div class="product-card-${matchingProduct.id}">
                    <div class="product-details d-flex gap-4">
                        <div class="product-image">
                            <img src="${matchingProduct.image}" alt="samsung">
                        </div>
                        <div class="product-context">
                            <h5 class="product-name fw-bold ">${matchingProduct.name}</h5>
                            <p class="verified"><span class="icon me-2"><i class="bi bi-patch-check"></i></span>Verified
                                Local Shop</p>
                            <div class="product-qauntity d-flex gap-3 mt-3 ">
                                <div class="qty">Qty: ${cartItem.quantity}</div>
                                <div class="total-price"><div>${matchingProduct.price} </div>  </div>
                                <div class="delete-icon" data-product-id="${matchingProduct.id}" data-product-name="${matchingProduct.name}" data-quantity="${matchingProduct.quantity}"><i class=" bi-trash3"></i></div>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>


  `;
});

document.querySelector(".product-container-js").innerHTML += cartSummaryHTML;
document.querySelector(".product-calculations-js").innerHTML = `

 <div class="calculatons">
                        <div class="subtotal-con mb-2 d-flex justify-content-between">
                            <div class="subtotal">Subtotal</div>
                            <div class="subtotal-price">N3892.00</div>
                        </div>
                        <div class="shipping-con  mb-2 d-flex justify-content-between">
                            <div class="shipping">Shipping</div>
                            <div class="shipping-price">Free</div>
                        </div>
                        <div class="tax-con mb-2 d-flex justify-content-between">
                            <div class="taxes">Taxes</div>
                            <div class="tax-price">N3023</div>
                        </div>
                        <hr>
                    </div>
                    <div class="total-con mb-4 mt-3 d-flex justify-content-between">
                        <div class="total">Total</div>
                        <div class="total-amount">N3293.00</div>
                    </div>
                    <button class="btn btn-warning"> <i class=" me-2 bi-lock-fill"></i>Place
                        Order</button>
                    <a href="#" class="secure-ssl-payment">
                        <small class="secure-ssl">
                            <i class="bi me-2 bi-key"></i>Secure SLL Encrypted Checkout
                        </small>
                    </a>
`;
// Delete Button
document.querySelectorAll(".delete-icon").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const productId = deleteBtn.dataset.productId;
    removeFromCart(productId);
    console.log(productId);
    const productCard = document.querySelector(`.product-card-${productId}`);
    productCard.remove();
    saveToStorage();
  });
});
