'use strict';
const toggler = document.querySelector('.toggler');
const navbarList = document.querySelector('.navbar__list-wrapper');

toggler.addEventListener('click', function(e) {
    navbarList.classList.toggle('active');
    if(navbarList.classList.contains('active'))
        document.body.style.overflow = 'hidden'
    else
        document.body.style.overflow = 'auto'
    toggler.classList.toggle('toggler_toggled');
});

navbarList.addEventListener('click', function(e){
    e.preventDefault();
    const nested = e.target.nextSibling.nextSibling;
    if(nested && nested.classList.contains('navbar__nested-list')) {
        e.target.classList.toggle('active');
        nested.classList.toggle('active');
    }
});