import createHomePage from "./homepage";
import createAboutPage from "./about";
import createMenuPage from "./menu";

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
                // current = content.firstChild;
            } else if (button === about) {
                content.innerHTML = ""; 
                createAboutPage();
                // current = content.firstChild;
            } else if (button === menu) {
                content.innerHTML = ""; 
                createMenuPage();
                // current = content.firstChild;
            }
        });
    });
};

tabswitch();
