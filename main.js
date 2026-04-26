
let left = document.getElementById("left");
let right = document.getElementById("right");
let login = document.getElementById("login-line");
let cart = document.getElementById("cart-line");
let fav = document.getElementById("fav-line");
let search = document.getElementById('searchInput');

let currentSlide = 0;
let windowWidth = window.innerWidth; 
let silde = document.getElementById("image-contaier");

function minOne(){
    if (currentSlide==0){
        currentSlide=3
    }
    currentSlide-=1
    silde.style.transform = `translateX(-${windowWidth * currentSlide}px)`;

}

function plusOne(){
    if (currentSlide==2){
        currentSlide=-1
    }
    currentSlide+=1 
    silde.style.transform = `translateX(-${windowWidth * currentSlide}px)`;
}

document.addEventListener("mousemove",function(event){

    let mouseX  = event.clientX;
    if(((mouseX/windowWidth) * 100) > 50){
        right.style.display= "block";
        left.style.display= "none";

    }else{
        left.style.display="block";
        right.style.display= "none";
    }

});



