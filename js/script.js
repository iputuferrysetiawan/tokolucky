// toggle classs active
const navbarNav=document.querySelector('.navbar-nav');
// klik hamburger menu
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// klik dimana saja hilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})