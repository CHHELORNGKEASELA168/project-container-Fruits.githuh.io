
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}