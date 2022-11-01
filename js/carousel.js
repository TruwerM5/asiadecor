'use strict';

const categoriesList = document.querySelector('.categories__list');
const categoriesButtons = categoriesList.querySelectorAll('.categories__btn');

function resetClasses(elems) {
    for(let elem of elems) {
        elem.classList.remove('categories__btn_active');
    }
}

categoriesButtons.forEach( item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        resetClasses(categoriesButtons);
        e.target.classList.add('categories__btn_active');
    });
});

const products = document.querySelectorAll('.products');
// const productsList = products.querySelector('.products__list');
// const listItems = productsList.querySelectorAll('.products__item');
// const newItems = products.querySelectorAll('.products__item_new');
// const buttonPrev = products.querySelector('.products__button_prev');
// const buttonNext = products.querySelector('.products__button_next');

products.forEach( product => {
    const productList = product.querySelector('.products__list');
    const listItems = productList.querySelectorAll('.products__item');
    
    const buttonPrev = product.querySelector('.products__button_prev');
    const buttonNext = product.querySelector('.products__button_next');

    buttonPrev.addEventListener('click', function() {
        carousel('prev', product, 0, 4);
    });
    buttonNext.addEventListener('click', function() {
        carousel('next', product, 0, 4);
    });
});

function carousel(direction, product, position, step) {
    let itemWidth = product.querySelector('.products__item').clientWidth;
    let productList = product.querySelector('.products__list');
    if(direction == 'prev') {
        position += itemWidth * step;
        position = Math.min(position, 0);
        
    } else if(direction == 'next') {
        position -= itemWidth * step;
        position = Math.max(position, -productList.clientWidth);
    }
    productList.style.transform = `translateX(${position}px)`;
}

const newItems = products[0].querySelectorAll('.products__item_new');
newItems.forEach( item => {
    let flag = document.createElement('div');
    flag.className = 'flag';
    flag.textContent = 'NEW';
    item.append(flag);
});
