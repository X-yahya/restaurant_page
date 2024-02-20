function createMenuPage() {
    const content = document.querySelector("#content");

    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "Menu";

    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    const menuItems = [
        "Ramen",
        "Onigiri",
        "Okonomiyaki",
        "Taiyaki",
        "Takoyaki",
        "Matcha Ice Cream"
    ];


    menuItems.forEach(item => {
        const menuItem = document.createElement("li");
        menuItem.textContent = item;
        menuList.appendChild(menuItem);
    });

    menuPage.appendChild(menuHeader);
    menuPage.appendChild(menuList);
    content.appendChild(menuPage);
}

export default createMenuPage;
