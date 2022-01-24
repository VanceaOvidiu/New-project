const meniuLateral = document.querySelector('.meniuLateral');
const item = document.querySelector('.list_item')
const lista = document.querySelector(".list_load")


const meniu = document.querySelector('.menu-icon')

meniu.addEventListener('click', function (e) {
    if (this.classList.contains('closed')) {
        this.classList.remove('closed');
        this.classList.add('opened');
        meniuLateral.style.left = '0px';
    } else {
        this.classList.remove('opened');
        this.classList.add('closed');
        meniuLateral.style.left = '-250px';
    }
});
let i;
const thisLI = (this);
timeOut = window.setInterval("block", 200, item);
setTimeout(function press() {
    thisLI.style.opacity = "1"
})
// let i = 1;

// const a = window.setInterval("press", 200, item);
//
//
// function press() {
//     document.getElementById(item).innerHTML = item++;
//     if (item > 8)
//         window.clearInterval(a);
// }


