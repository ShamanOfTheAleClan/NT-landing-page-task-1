// window.onload=function(){

// burger animation

let burger = document.getElementById("burger");
let menu = document.querySelector(".menu-wrap");

function burgerClick()  {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        menu.classList.remove('translated');
        }
        else {
        burger.classList.add('active');
        menu.classList.add('translated');
        }
    }
burger.addEventListener('click', burgerClick) ;
// }

// https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/
