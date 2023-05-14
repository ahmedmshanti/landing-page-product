const toggleButton = document.getElementsByClassName("burger")[0];
const navbarUl = document.getElementsByClassName("menu")[0];
const closeButton = document.getElementsByClassName("close")[0];
const plusBtn = document.getElementsByClassName("plus")[0]; 
const minusBtn = document.getElementsByClassName("minus")[0];
const itemCount = document.getElementsByClassName("count")[0];
const cartBtn = document.getElementsByClassName("cart")[0];
const addToCart = document.getElementsByClassName("add-btn")[0];
const cartCard = document.getElementsByClassName("cart-card")[0];
const cardProduct = document.getElementsByClassName("prod")[0];
const checkoutBtn = document.getElementsByClassName("checkout")[0];
const emptyCart = document.getElementsByClassName("empty")[0]; 
const cartNumber = document.getElementsByClassName("cart-number")[0];
const mainContent = document.getElementsByClassName("main-card")[0];

let count = 0;

toggleButton.addEventListener('click', () => {
   navbarUl.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
 });

plusBtn.addEventListener('click', () => {
   itemCount.textContent = ++count;
});

minusBtn.addEventListener('click', () => {
   itemCount.textContent = --count;
});

cartBtn.addEventListener('click', () => {
   cartCard.classList.toggle('toggle');
});

addToCart.addEventListener('click', () => {
   if(count > 0) {
      cardProduct.innerHTML = `
      <img src="/images/image-product-1-thumbnail.jpg" alt="cart item thumbnail" class="cart-thumb">
      <div class="added-product">
        <p>Autumn Limited Edition Sneakers</p>
      <div class="quantity">
        <p>$125.00 x ${count} <span class="total">$${125*count}</span></p>            
      </div>
      </div>
      <img class="delete" src="/images/icon-delete.svg" alt="delete cart item" onclick="letsDelete()">`
      
      cardProduct.style.display = "flex";
      emptyCart.style.display = "none";
      checkoutBtn.style.display = "flex";
      cartNumber.style.display = "flex";
      cartNumber.textContent = count;
   } else {
      alert("can't add numbers less than one");
   }
});

function letsDelete() {
      emptyCart.style.display = "flex";
      checkoutBtn.style.display = "none";
      cartNumber.style.display = "none";
      cardProduct.style.display = "none";
   }