// header scroll
let nav = document.querySelector (".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollaps = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a)(
    a.addEventlistener("click" , function(){
        navCollapse.classlist.remove("show");
    })
))