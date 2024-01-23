import games from "./games.js";
let btnNav = document.getElementById('btn-nav-out');
let menuHo = document.getElementById('menu-ho');
let menuVe = document.getElementById('menu-ve');
let showMenu = document.getElementById('btn-nav');
let brand = document.querySelector('.brand');
let contentContainer = document.getElementById('content--container');
let item = document.querySelectorAll('.menu-item');
let itemVe = document.querySelectorAll('.menu-item-ve');
let category = 'MMORPG';
let home = new games();
home.getgames(category);
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(event) {
        let active = event.target;
        home.getgames(active.text);
        active.classList.add('active');
        itemVe[i].classList.add('active-ve');
        for (let j = 0; j < item.length; j++) {
            if (j != i) {
                item[j].classList.remove('active');
                itemVe[j].classList.remove('active-ve');
            }

        }
    });
}
for (let g = 0; g < itemVe.length; g++) {

    itemVe[g].addEventListener('click', function(event) {
        let active = event.target;
        home.getgames(active.text);
        active.classList.add('active-ve');
        item[g].classList.add('active');
        for (let j = 0; j < item.length; j++) {
            if (j != g) {
                item[j].classList.remove('active');
                itemVe[j].classList.remove('active-ve');
            }

        }
    });
}

function sizing() {
    let width = document.body.clientWidth;
    if (width <= 992) {
        btnNav.classList.replace('d-none', 'd-block');
        menuHo.classList.add('d-none');
        brand.classList.replace('col-md-4', 'col-8');
        contentContainer.style.top = 28 + 'px';

    } else {
        btnNav.classList.replace('d-block', 'd-none');
        menuHo.classList.remove('d-none');
        brand.classList.replace('col-8', 'col-md-4');
        menuVe.classList.replace('d-block', 'd-none');
        contentContainer.style.top = 28 + 'px';

    }
}
window.addEventListener("resize", function() {
    sizing();
});
sizing();
showMenu.addEventListener('click', function() {
    if (menuVe.classList.contains('d-block')) {
        menuVe.classList.replace('d-block', 'd-none');
        contentContainer.style.top = 28 + 'px';
    } else {
        menuVe.classList.replace('d-none', 'd-block');
        contentContainer.style.top = 90 + 'px';
    }
});