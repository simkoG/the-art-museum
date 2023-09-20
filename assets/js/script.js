
/**
 * OffSite menu toggle
 */

(() => {
  const offsiteMenu = document.querySelector("[data-offsite]");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  if(!offsiteMenu || !menuToggle) {
    return;
  }

  menuToggle.onclick = (event) => {
    event.preventDefault();
    document.body.classList.toggle("offsite-menu--expanded");

    let currentExpandedState = offsiteMenu.getAttribute("aria-expanded");
    offsiteMenu.setAttribute("aria-expanded", !JSON.parse(currentExpandedState));
  }
})();


/**
 * Cart quantity plus and minus buttons
 */

(() => {
  const cart = document.querySelector(".cart");

  if(!cart) {
    return;
  }

  let cartItems = cart.querySelectorAll(".cart__item");

  if(!cartItems) {
    return;
  }

  cartItems.forEach(item => {
    let input = item.querySelector("input.product-quantity-value");
    let plus = item.querySelector(".product-quantity-button.plus");
    let minus = item.querySelector(".product-quantity-button.minus");

    plus.onclick = (event) => {
      let value = parseInt(input.value);

      if(++value < 100) {
        input.value = value;
      }

      if(value === 0) {
        input.classList.add("product-quantity-value--empty");
      } else {
        input.classList.remove("product-quantity-value--empty");
      }
    }

    minus.onclick = (event) => {
      let value = parseInt(input.value);

      if(--value >= 0) {
        input.value = value;
      }

      if(value === 0) {
        input.classList.add("product-quantity-value--empty");
      } else {
        input.classList.remove("product-quantity-value--empty");
      }
    }
  });
})();
