// Menu variables
let menu = document.getElementById('menu');
let menuOpenBtn = document.getElementById('openMenuBtn');
let menuCloseBtn = document.getElementById('closeBtnMenu');

// Search variables
let searchContainer = document.getElementById('searchContainer');
let searchBtnOpen = document.getElementById('openSearchBtn');
let searchBtnClose = document.getElementById('closeBtnSearch');

// Menu events
menuOpenBtn.addEventListener('click', ()=>{
    menu.style.display = 'block';
});

menuCloseBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
});

// Search event
searchBtnOpen.addEventListener('click', ()=>{
    searchContainer.style.display = 'block';
});

searchBtnClose.addEventListener('click', ()=>{
    searchContainer.style.display = 'none';
});