import { cart, addToCart, updateCart } from "../data/cart.js";
import { products } from "../data/products.js";

// Generating Products HTML
let productHTML = "";
products.forEach((product) => {
  productHTML += `

 <div class=" product p-3 rounded-3 border overflow-hidden shadow-sm " >
                <img class="mb-3" src="${product.image}" alt="...">
                <div class="card-body">
                    <div class="name-fav-icon">
                        <h5 class="card-title name">${product.name}</h5>
                        <button class="fav-icon">
                            <svg class="f-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                               <path ${product.heart}/>
                            </svg>
                        </button>

                    </div>
                    <div class="ratings d-flex justify-content-between align-items-center">
                        <div class="star-icon-con d-flex justify-content-between align-items-center">
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                width="24px" fill="#e3e3e3">
                              <path  ${product.ratings.star}/>
                            </svg>
                            <p class="scount">${product.ratings.starcount}</p>
                        </div>
                        <div class="count">
                            (${product.ratings.count})
                        </div>
                    </div>
                    <hr>
                    <div class="tag-con d-flex justify-content-between">
                        <div class="price">${product.price}</div>
                        <div class="dilevery-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                   ${product.dilevery} />
                            </svg>
                        </div>
                    </div>


                    <button class="btn  btn-warning add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}">Add to Cart</button>
                </div>
            </div>

`;
});

document.querySelector(".products-grid").innerHTML = productHTML;

// Cart button script
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const { productId, productName } = button.dataset;

    addToCart(productId, productName);
    updateCart(productId, productName);

  });
});


// Cart favorite icon
const heartsBtn = document.querySelectorAll(".fav-icon");
const heartsIcon = document.querySelectorAll(".f-icon");
heartsBtn.forEach((heartBtn, index) => {
  heartBtn.addEventListener("click", () => {
    let targetIcon = heartsIcon[index];
    if (targetIcon.classList.contains("f-icon")) {
      targetIcon.classList.remove("f-icon");
      targetIcon.classList.add("f-icon-fill");
    } else {
      targetIcon.classList.remove("f-icon-fill");
      targetIcon.classList.add("f-icon");
    }
  });
});
