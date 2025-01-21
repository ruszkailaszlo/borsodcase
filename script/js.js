let darkmode = document.querySelector('#darkmode');
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('color');
        }
        else {
            darkmode.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('color');
        }
    };


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


const loadingPage = document.getElementById('loading-page');
const MIN_LOADING_TIME = 3000; 
const startTime = Date.now();
window.addEventListener('load', () => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
    setTimeout(() => {
        loadingPage.style.display = 'none';
    }, remainingTime);
});


$(document).ready(function(){
    $(".btn-plus").on("click", function(){
        $(this).parent().parent().find(".more-text").toggleClass("active");
    });
}); 