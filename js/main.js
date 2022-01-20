const btnMobile = document.querySelector('#menu-mobile');
const mobileMenu = document.querySelector('#menu-mobile-container');
const body = document.querySelector('body');
mobileMenu.style.display = 'none';
const btnMobileClose = document.querySelector('#btn-close');

const progressBarListValues = document.querySelectorAll('.progress-porcent');

const progressBarList = document.querySelectorAll('.progress');

const progressPorcent = document.querySelectorAll('.progress-porcent');

console.log(progressPorcent);


for(var i = 0; i < progressBarListValues.length; i++){


    progressBarList[i].style.width = progressBarListValues[i].innerHTML;
    
    const result = progressBarList[i].style.width = progressBarListValues[i].innerHTML;

    // progressPorcent[i].style.margin = "1rem " + progressBarList[i].style.width;


    
}






function closeMenuMobile(){
    mobileMenu.style.display ="none";
    body.style.overflow ="initial";
}



function callMenuMobile(){

    mobileMenu.style.display = "block";
    body.style.overflow = "hidden";


    console.log(mobileMenu.style.display);
}

    
        


