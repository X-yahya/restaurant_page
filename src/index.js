import loadHome from "./HomePage";
import loadMenu from "./Menu";
import loadContact from "./contact";
import loadStructure  from "./structure";
import "./style.css"
loadStructure()  ; 
const homeebtn = document.querySelector(".Home") ; 
const menuBtn = document.querySelector(".Menu") ;
const contactBtn = document.querySelector(".Contact") ;
const contentDiv = document.querySelector(".content") ;
loadHome(contentDiv) ; 
homeebtn.addEventListener("click" , ()=>
{
    contentDiv.innerHTML = "" ;
    loadHome(contentDiv) ; 
});

menuBtn.addEventListener("click",()=>
{
    contentDiv.innerHTML = "" ; 
    loadMenu(contentDiv) ; 
});

contactBtn.addEventListener("click",()=>
{
    contentDiv.innerHTML = "" ; 
    loadContact(contentDiv) ; 

});




