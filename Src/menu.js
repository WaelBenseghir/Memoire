const hamMenu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.nav__list');

hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})