function createHomePage() {
    const content = document.querySelector("#content");
    const homepage = document.createElement("div");
    homepage.classList.add("homepage");

    const homeapgeheader = document.createElement("h1");
    homeapgeheader.textContent = "Welcome To lytiees";

    const introVid = document.createElement("video");
    introVid.src = "/src/introVid.mp4";
    introVid.autoplay = true;
    introVid.loop = true;
    introVid.controls = true;
    introVid.width = 640;
    introVid.height = 360;
    homepage.appendChild(homeapgeheader);
    homepage.appendChild(introVid);
    content.appendChild(homepage);
}

export default createHomePage;
