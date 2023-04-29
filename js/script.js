const btnMenu = document.getElementById('btn-menu');
const menuRight = document.getElementById('right-menu');
const btnClose = document.getElementById('btn-close');

btnMenu.addEventListener('click', () => {
    menuRight.classList.toggle('open');
});



btnClose.addEventListener('click', () => {
    menuRight.classList.remove('open');
});