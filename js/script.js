const btnMenu = document.getElementById('btn-menu');
const menuRight = document.getElementById('right-menu');
const btnClose = document.getElementById('btn-close');
const searchButton = document.querySelector('.btn-search');
const searchContainer = document.querySelector('.search-container');

btnMenu.addEventListener('click', () => {
    menuRight.classList.toggle('open');
});

btnClose.addEventListener('click', () => {
    menuRight.classList.remove('open');
});

searchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('show');
  });