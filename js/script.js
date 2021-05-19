document.getElementById('nav-toggler').addEventListener('click', function () {
    let navbar = document.getElementById('navbar');
    if(navbar.classList.contains('open')){
        navbar.classList.remove('open');
    }else{
        navbar.classList.add('open');
    } 
})