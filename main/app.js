const hamburger = document.querySelector("#hamburger");  
const close = document.querySelector("#close");
const navLinks = document.querySelector('.nav-links');  
const nav = document.querySelector("nav"); 
const links = document.querySelectorAll('.nav-links li'); 

// hamburger.addEventListener('click', () =>{
//     navLinks.classList.toggle("open"); 
//         hamburger.style.display = 'none'; 
//         close.style.display = "block";
// }) 

nav.addEventListener('click', e =>{
    if(e.target == close || e.target == hamburger){
        navLinks.classList.toggle("open"); 
        hamburger.classList.toggle("hidden");
        close.classList.toggle("hidden");   
    }
})