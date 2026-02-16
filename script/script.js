// function to load the products from api
let products = [];
const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      products = data;
      displayTopProducts(data);
      //displayProductOptions(data);
    });
};
const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      //displayTopProducts(data);
      displayProductOptions(data);
    });
};
loadProducts();
loadAllProducts();

// to display trending items
const displayTopProducts = (products) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  products
    .filter((product) => product.rating.rate >= 4.5)
    .slice(0, 3)
    .forEach((product) => {
      const card = document.createElement("div");
      card.innerHTML = `
            <div class="card bg-base-100 shadow-sm">
                <figure>
                    <img class="h-48 w-full object-contain" src="${product.image}" alt="Product" />
                </figure>
                <div class="card-body">
                    <div class="badge badge-primary">${product.category}</div>
                    <div class="">
                      <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                      <p>(${product.rating.count})</p>
                    </div>
                    <h2 class="card-title truncate">${product.title}</h2>
                    <h2 class="font-bold">$${product.price}</h2>
                    <div class="card-actions justify-between mt-2">
                        <button class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-eye"></i> Details
                        </button>
                        <button class="btn btn-primary">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
      cardContainer.appendChild(card);
    });
};

//function to display product categories in products page
const displayProductOptions = (products) => {
  const optionContainer = document.getElementById("productOptionContainer");
  optionContainer.innerHTML = "";
  const allOption = document.createElement("div");
  allOption.innerHTML = `<button onclick="displayAllProducts(products)" class="btn btn-outline btn-primary rounded-full text-sm">All</button>`;
  optionContainer.appendChild(allOption);

  const categories = [...new Set(products.map((product) => product.category))];
  categories.forEach((category) => {
    const option = document.createElement("div");
    
    const escapedCategory = category.replace(/'/g, "\\'");
    option.innerHTML = `<button 
    onclick="fetchProductsByCategory('${escapedCategory}')" 
    class="btn btn-outline btn-primary rounded-full text-sm">${category}</button>`;
    optionContainer.appendChild(option);
  });
};

// function to fetch products based on category
const fetchProductsByCategory = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      displayProductsByCategory(data);
    });
};
//display all products
const displayAllProducts = (products) => {
  const cardContainer = document.getElementById("productCardContainer");
  cardContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <div class="card bg-base-100 shadow-sm">
                <figure>
                    <img class="h-48 w-full object-contain" src="${product.image}" alt="Product" />
                </figure>
                <div class="card-body">
                    <div class="badge badge-primary">${product.category}</div>
                    <div class="">
                      <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                      <p>(${product.rating.count})</p>
                    </div>
                    <h2 class="card-title truncate">${product.title}</h2>
                    <h2 class="font-bold">$${product.price}</h2>
                    <div class="card-actions justify-between mt-2">
                        <button class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-eye"></i> Details
                        </button>
                        <button class="btn btn-primary">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    cardContainer.appendChild(card);
  });
};

//display products based on category
const displayProductsByCategory = (products) => {
  const cardContainer = document.getElementById("productCardContainer");
  cardContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <div class="card bg-base-100 shadow-sm">
                <figure>
                    <img class="h-48 w-full object-contain" src="${product.image}" alt="Product" />
                </figure>
                <div class="card-body">
                    <div class="badge badge-primary">${product.category}</div>
                    <div class="">
                      <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                      <p>(${product.rating.count})</p>
                    </div>
                    <h2 class="card-title truncate">${product.title}</h2>
                    <h2 class="font-bold">$${product.price}</h2>
                    <div class="card-actions justify-between mt-2">
                        <button class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-eye"></i> Details
                        </button>
                        <button class="btn btn-primary">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    cardContainer.appendChild(card);
  });
};
