// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "Port Royal",
    category: "cervezas",
    price: 5.99,
    img: "./img/img1.jfif",
    desc: `Es la cerveza Premium local de Honduras de gran sabor que inspira a los hondureños a celebrar momentos especiales, recompensando  sus esfuerzos y logros`,
  },
  {
    id: 2,
    title: " Corona",
    category: "cervezas",
    price: 6.99,
    img: "./img/img3.jfif",
    desc: `El hecho de introducir una rodaja de limón en la botella es ya un elemento propio de la marca; con una serie de pasos para que el disfrute sea perfecto.`,
  },
 
  {
    id: 5,
    title: " strawberry daiquiri",
    category: "Cocteles",
    price: 12.99,
    img: "./img/img5.jfif",
    desc: `El daiquirí o daiquiri es un cóctel escarchado hecho con ron blanco, jugo de limón o de lima y azúcar. Tradicionalmente, no incluye decoración, o en todo caso un gajo de limón verde. `,
  },
  
  {
    id: 7,
    title: "Monjito",
    category: "Cocteles",
    price: 12.99,
    img: "./img/img6.jfif",
    desc: `El mojito​ es un cóctel popular originario de Cuba, compuesto de ron, limón, menta o eucalipto y agua mineral.`,
  },
  {
    id: 8,
    title: "Sex on the Beach",
    category: "Cocteles",
    price: 12.99,
    img: "./img/img7.jfif",
    desc: ` Sex on the Beach es un cóctel con múltiples variaciones. Hay dos tipos en general: El primero se hace a base de vodka, licor de melocotón, zumo de naranja y zumo de arándanos. Este es el cocktail oficial de la International Bartenders Association. `,
  },
  
  {
    id: 10,
    title: " Domaine de La Romanée-Conti. AurumRed Gold.",
    category: "Vino",
    price: 3400.000,
    img: "./img/img8.jfif",
    desc: `AurumRed fue una edición limitada, resultado de la fusión de arte y vino. Una obra maestra del artista español Alberto Rodríguez Serrano, de quien puede tratarse del próximo Miguel Ángel. Alberto puede presumir de haber expuesto en la Accademia di Belle Arti di Firenze, la misma que vería las pinturas del artista de la Capilla Sixtina..`,
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
