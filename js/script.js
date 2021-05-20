
let navbar = document.getElementById('navbar');
let overlay = document.getElementById('overlay');

document.getElementById('nav-toggler').addEventListener('click', function () {
    if(navbar.classList.contains('open')){
        navbar.classList.remove('open');
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }else{
        navbar.classList.add('open');
        overlay.style.opacity = 1;
        overlay.style.display = 'block';
    }  
})

overlay.addEventListener('click', function(){
    if(navbar.classList.contains('open')){
        navbar.classList.remove('open');
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }else{
        navbar.classList.add('open');
        overlay.style.opacity = 1;
        overlay.style.display = 'block';
    } 
})