function createAboutPage() {
    const content = document.querySelector("#content");
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");
    const aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About Lytiees Cooking";
    const aboutText = document.createElement("p");
    aboutText.textContent = "Welcome to Lytiees Cooking! We're passionate about bringing delicious recipes, cooking tips, and culinary inspiration to your kitchen. Whether you're a seasoned chef or just starting out, we have something for everyone. Join us on a culinary journey filled with flavors, techniques, and the joy of cooking.";
    aboutSection.appendChild(aboutHeader);
    aboutSection.appendChild(aboutText);
    content.appendChild(aboutSection);
}

export default createAboutPage;
