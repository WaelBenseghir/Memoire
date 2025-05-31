const hamMenu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.nav__list');
const subMenu = document.querySelector('.sub-menu')
const addPlant = document.querySelector('.add-plant')

hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

addPlant.addEventListener('click', function(){
        subMenu.classList.toggle('open')
})

