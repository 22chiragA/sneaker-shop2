const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuitem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".producttitle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const buyNowButton = document.getElementById('buyNowButton');
buyNowButton.addEventListener('click', function () {
  window.location.href = 'checkout.html';
});


document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.trim().toLowerCase();
  const sliderItems = document.querySelectorAll('.slideritem');
  let foundVisibleItem = false;
  sliderItems.forEach(item => {
    const title = item.querySelector('.slidertitle').textContent.toLowerCase();
    const price = item.querySelector('.sliderprice').textContent.toLowerCase();
    const isVisible = title.includes(searchTerm) || price.includes(searchTerm);
    item.style.display = isVisible ? 'block' : 'none';
    if (isVisible) {
      foundVisibleItem = true;
    }
  });

  const noCategoryAvailable = document.getElementById('noCategoryAvailable');
  noCategoryAvailable.style.display = foundVisibleItem ? 'none' : 'block';
});

const loginButton = document.getElementById("loginButton")
loginButton.addEventListener("click", function () {

  window.location.href = "login.html";
});

const addToCartButton = document.getElementById('addToCartButton');
addToCartButton.addEventListener('click', function () {

  alert("Item added to cart successfully!");


  const item = {
    name: choosenProduct.title,
    price: choosenProduct.price,
    image: choosenProduct.colors[0].img,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et itaque quis sequi voluptates totam."
  };


  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(item);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
});


const cartLogoButton = document.getElementById('cartLogoButton');


cartLogoButton.addEventListener('click', function () {

  window.location.href = 'cart.html';
});




