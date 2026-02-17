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
                    <div class="flex justify-between items-center">
                    <div class="badge flex items-baseline bg-blue-200 font-semibold text-blue-900">${product.category}</div>
                    <div class="flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                      <p>(${product.rating.count})</p>
                    </div>
                    </div>
                    <div class="mt-2">
                    <h2 class="card-title truncate">${product.title}</h2>
                    <h2 class="font-bold text-lg">$${product.price}</h2>
                    </div>
                    <div class="card-actions flex items-center justify-between mt-2 ">
                        <button onclick="loadProductDetails(${product.id})" class="btn text-blue-900 rounded-lg border-blue-900 hover:bg-blue-900 hover:text-white">
                            <i class="fa-solid fa-eye"></i> Details
                        </button>
                        <button class="btn bg-blue-900 text-white rounded-lg border-blue-900 hover:bg-white hover:text-blue-900">
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
  allOption.innerHTML = `<button onclick="displayAllProducts(products)" class="btn hover:bg-blue-900 hover:text-white rounded-full text-sm">All</button>`;
  optionContainer.appendChild(allOption);

  const categories = [...new Set(products.map((product) => product.category))];
  categories.forEach((category) => {
    const option = document.createElement("div");

    const escapedCategory = category.replace(/'/g, "\\'");
    option.innerHTML = `<button 
    onclick="fetchProductsByCategory('${escapedCategory}')" 
    class="btn hover:bg-blue-900 hover:text-white rounded-full text-sm">${category}</button>`;
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
                    <div class="flex justify-between items-center">
                    <div class="badge flex items-baseline bg-blue-200 font-semibold text-blue-900">${product.category}</div>
                    <div class="flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                      <p>(${product.rating.count})</p>
                    </div>
                    </div>
                    <div class="mt-2">
                    <h2 class="card-title truncate">${product.title}</h2>
                    <h2 class="font-bold text-lg">$${product.price}</h2>
                    </div>
                    <div class="card-actions flex items-center justify-between mt-2 ">
                        <button onclick="loadProductDetails(${product.id})" class="btn text-blue-900 rounded-lg border-blue-900 hover:bg-blue-900 hover:text-white">
                            <i class="fa-solid fa-eye"></i> Details
                        </button>
                        <button class="btn bg-blue-900 text-white rounded-lg border-blue-900 hover:bg-white hover:text-blue-900">
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
                    <div class="flex justify-between items-center">
                    <div class="badge flex items-baseline bg-blue-200 font-semibold text-blue-900">${product.category}</div>
                    <div class="flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
                      <p>(${product.rating.count})</p>
                    </div>
                    </div>
                    <div class="mt-2">
                    <h2 class="card-title truncate">${product.title}</h2>
                    <h2 class="font-bold text-lg">$${product.price}</h2>
                    </div>
                    <div class="card-actions flex items-center justify-between mt-2 ">
                        <button onclick="loadProductDetails(${product.id})" class="btn text-blue-900 rounded-lg border-blue-900 hover:bg-blue-900 hover:text-white">
                            <i class="fa-solid fa-eye"></i> Details
                        </button>
                        <button class="btn bg-blue-900 text-white rounded-lg border-blue-900 hover:bg-white hover:text-blue-900">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    cardContainer.appendChild(card);
  });
};
// function to load product details in modal
const loadProductDetails = (id) => {
  const url = fetch(`https://fakestoreapi.com/products/${id}`);
  url
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      showProductDetails(data);
    });
};

// function to show product details in modal
const showProductDetails = (product) => {
  const modalDetail = document.getElementById("modalDetailContainer");
  modalDetail.innerHTML = "";
  const modal = document.createElement("div");
  modal.innerHTML = `
  <div>
        <h1 class="text-2xl font-bold">${product.title}</h1>
        <p class="text-gray-600">Description: ${product.description}</p>
        <p class="font-bold">Price: $${product.price}</p>
      </div>
      <div>
        <p class="flex items-center gap-1 text-gray-700">Rating: ${product.rating.rate} <i class="fa-solid fa-star text-yellow-500 text-sm"></i></p>
        <p class=" text-gray-700">Reviews: ${product.rating.count}</p>
      </div>
      <div>
        <button class="btn bg-blue-900 text-white hover:bg-white hover:text-blue-900 rounded-lg">Buy Now</button>
        <button class="btn hover:text-white hover:bg-blue-900 rounded-lg">add to cart</button>
      </div>
    </div>
  `;
  modalDetail.appendChild(modal);
  document.getElementById("modalContainer").showModal();
};
