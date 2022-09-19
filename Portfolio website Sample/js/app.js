const hamburgur = document.querySelector('.header .nav-bar .nav-list .hamburgur');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburgur.addEventListener('click',()=>{
    hamburgur.classList.toggle('active');

});