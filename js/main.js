const btnMobile = document.querySelector('#menu-mobile');
const mobileMenu = document.querySelector('#menu-mobile-container');
const body = document.querySelector('body');
mobileMenu.style.display = 'none';
const btnMobileClose = document.querySelector('#btn-close');


function closeMenuMobile(){
    mobileMenu.style.display ="none";
    body.style.overflow ="initial";
}



function callMenuMobile(){

    mobileMenu.style.display = "block";
    body.style.overflow = "hidden";


    console.log(mobileMenu.style.display);
}

    
        


