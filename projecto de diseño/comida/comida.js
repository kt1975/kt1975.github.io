// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "Desayuno tipico",
    category: "breakfast",
    price: 15.99,
    img: "./img/img1.jfif",
    desc: `ricos panqueques de fresa y banana  con jugo natural de su preferencia  `,
  },
  {
    id: 2,
    title: " Glutenfree love",
    category: "breakfast",
    price: 13.99,
    img: "./img/img2.jfif",
    desc: `Panqueques gluten free `,
  },
  
  {
    id: 4,
    title: "Happy Birthday",
    category: "breakfast",
    price: 20.99,
    img: "./img/im8.jfif",
    desc: `Nothing says "Happy Birthday" like starting the day with a surprise festive delicious meal Surprise that special someone and let the birthday celebration begin `,
  },
  {
    id: 5,
    title: " Frutti Di Mari",
    category: "lunch",
    price: 22.99,
    img: "./img/img6.jfif",
    desc: `Una deliciosa pasta Frutti Di Mari en Luna Maya® & La has probado? `,
  },
  
  {
    id: 7,
    title: "San Simon platter",
    category: "lunch",
    price: 50.99,
    img: "./img/img5.jfif",
    desc: `¿Ya probaste el San Simon platter ? Una deliciosa combinacion de langosta, camarones, calamar frito y caracol. Lo mejor que viene en tu paquete todo incluido! `,
  },
  {
    id: 8,
    title: "Ensalada Tibia",
    category: "lunch",
    price: 12.99,
    img: "./img/img4.jfif",
    desc: ` Les presentamos la "Ensalada Tibia" una mezcla de lechuga,vegetales frescos y arándanos con Salmón Sellado
    acompañado de Mousse de Queso de Cabra `,
  },
  
  {
    id: 10,
    title: " Mar y tierra gurmet",
    category: "dinner",
    price: 39.99,
    img: "./img/img7.jfif",
    desc: `Prefieres las Carnes o Mariscos? Con nuestro todo incluido premium puedes elegir comer en San Simon, Calketts y Luna Maya.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
