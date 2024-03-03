//spinner
window.addEventListener("load",()=>{
    document.querySelector(".loader").remove();
});
//animation navbar
const headerLinks = document.querySelectorAll(".header-links");
const footerLinks = document.querySelectorAll(".footer-links");
headerLinks.forEach(function(e,index){
    e.onclick = function(){
        headerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        footerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        this.classList.add("active");
        footerLinks[index].classList.add("active");
    }
});
footerLinks.forEach(function(e,index){
    e.onclick = function(){
        headerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        footerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        this.classList.add("active");
        headerLinks[index].classList.add("active");
    }
});
//button show
document.getElementById("btn_show").onclick = function(){
    window.location.href = "#cutyPuppies";
}
//button up
const up = document.querySelector(".up");
    window.onscroll = function(){
        window.scrollY >= 700 ? up.classList.add("show") :  up.classList.remove("show"); 
        }
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}