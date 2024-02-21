import createHomePage from "./homepage";
import createAboutPage from "./about";
import createMenuPage from "./menu";
import './style.css';
const tabswitch = () => {
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const menu = document.querySelector(".menu");
    const lst = [home, about, menu];
    const content = document.querySelector("#content");

    createHomePage();
  

    lst.forEach(button => {
        button.addEventListener("click", () => {
            if (button === home) {
                content.innerHTML = ""; 
                createHomePage();

            } else if (button === about) {
                content.innerHTML = ""; 
                createAboutPage();

            } else if (button === menu) {
                content.innerHTML = ""; 
                createMenuPage();
            }
        });
    });
};

tabswitch();
