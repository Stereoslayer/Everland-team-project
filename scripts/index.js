// --------------------- Этот блок касается всего меню в шапке----------------------------------------
const header = document.querySelector(".header");
const primaryMenu = document.querySelector(".primary-menu");
const headerMenu = document.querySelector(".header__menu");
const menuIconBurger = document.querySelector(".header__icon-burger");
const body = document.body;

//Определяем @media screen, если меняется, то записываем состояние
const mobiletScreen = window.matchMedia("(max-width: 749px)");
const tabletScreen = window.matchMedia("(max-width: 1439px)");
let isMobiletScreen = mobiletScreen.matches;
let isTabletScreen = tabletScreen.matches;

//Реализуем вертикальный аккардион-меню в мобайл версии
function setMobileMenu() {
  const primaryMenuSubList = document.querySelectorAll(
    ".primary-menu__sub-list"
  );
  primaryMenuSubList.forEach(function (item) {
    // если уже стоят стили, то убираем
    item.style["height"] = ""; 
    item.style["padding-top"] = ""; 
    item.style["transition"] = "";
    item.previousElementSibling.classList.remove("primary-menu__arrow_opened");

    if (isMobiletScreen) {
      const primaryMenuSubListHeight = item.offsetHeight;
      item.style["transition"] = "all 0.3s ease 0s";
      item.style["height"] = 0;
      item.parentNode.onclick = function (e) {
        item.previousElementSibling.classList.toggle("primary-menu__arrow_opened");
        if (item.offsetHeight == 0) {
          item.style["height"] = primaryMenuSubListHeight + "px";
          item.style["padding-top"] = 26 + "px";
        } else {
          item.style["height"] = 0;
          item.style["padding-top"] = "";
        }
      };
    }
  });
}
mobiletScreen.addEventListener("change", (e) => {
  isMobiletScreen = e.matches;
  setMobileMenu();
});
tabletScreen.addEventListener("change", (e) => {
  isTabletScreen = e.matches;
});

if (isMobiletScreen) { setMobileMenu() }

// Здесь обрабатывается клик на крестик, открывается и закрывается верхнее меню
headerMenu.addEventListener("click", function (e) {
  let scrollTop = window.pageYOffset;
  if(isTabletScreen) {body.classList.toggle("body_lock")}
  menuIconBurger.classList.toggle("header__icon-burger_active");
  primaryMenu.classList.toggle("primary-menu_active");
  if (scrollTop === 0 && !isTabletScreen) {
    header.classList.toggle("header_active");
  }
});

// Здесь обрабатывается скрол, для показа тени в фиксированном верхнем меню,
// Этот скрипт выполняется только для десктоп версии
window.addEventListener("scroll", function (e) {
  if (!isMobiletScreen && !isTabletScreen) {
    let scrollTop = window.pageYOffset;
    if (!menuIconBurger.classList.contains("header__icon-burger_active")) {
      scrollTop > 0
        ? header.classList.add("header_active")
        : header.classList.remove("header_active");
    }
  }
});

// Клик на пункте SecondaryMenu приводит к прокрутке странице к нужной секции
const gotoLinks = document.querySelectorAll("*[data-goto]");
if (gotoLinks.length > 0) {
  gotoLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onSecondaryMenuLinkClick);
  });
}
function onSecondaryMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top + pageYOffset - 100;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}

// Вешаем обработчит на все линки в выпадающем меню, если на них кликнули, то закрыть меню, вернуть меню бутер
const primaryMenuLink = document.querySelectorAll(".primary-menu__sub-link");
primaryMenuLink.forEach(function(item){
  item.addEventListener("click", onPrimaryMenuLinkClick);
});

function onPrimaryMenuLinkClick(e) {
  console.log(isTabletScreen);
  if(isTabletScreen) {body.classList.toggle("body_lock")};
  primaryMenu.classList.toggle("primary-menu_active");
  menuIconBurger.classList.toggle("header__icon-burger_active");  
}
// --------------------- Конец блока меню в шапке----------------------------------------

