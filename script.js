AOS.init();

const sideBarMenu = document.querySelector('#mobile-menu');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    console.log('hello');
    sideBarMenu.classList.toggle('right-0');
});
closeBtn.addEventListener('click', () => {
    sideBarMenu.classList.remove('right-0');
});