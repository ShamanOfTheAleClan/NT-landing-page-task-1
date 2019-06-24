//Apply WOW on JS generated items
let selectItems = document.querySelectorAll('.select-selected');
for (let i =0; i < selectItems.length; i++) {
    selectItems[i].classList.add('wow');
    selectItems[i].classList.add('fadeInUp');
}