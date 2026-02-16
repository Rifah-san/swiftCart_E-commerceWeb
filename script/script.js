// function to load the products from api
const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayTopProducts(data);
    });
};

// to display trending items
const displayTopProducts = (products) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  products.filter((product) => product.rating.rate >= 4.5)
    .slice(0, 3)
    .forEach((product) => {
      const card = document.createElement("div");
      card.innerHTML += `
      <div class="card bg-base-100  shadow-sm">
            <figure>
              <img class="h-48 w-full object-contain"
                src="${product.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between">
                <div class="badge badge-primary">${product.category}</div>
                <div class="">
                  <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                  <p>(${product.rating.count})</p>
                </div>
              </div>
              <h2 class="card-title truncate">
                ${product.title}
                <h2 class="font-bold">$${product.price}</h2>
              </h2>
              <div class="card-actions justify-between">
                <button class="btn">
                  <i class="fa-solid fa-eye"></i>Details
                </button>
                <button class="btn btn-primary">
                  <i class="fa-solid fa-cart-plus"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>`;
      cardContainer.appendChild(card);
    });
};
loadProducts();
