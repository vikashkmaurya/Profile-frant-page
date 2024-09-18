const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle("stickt",this.window.scrollY > 120);
});