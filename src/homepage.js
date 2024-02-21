import introVideo from "./assests/introVid.mp4" ;
import fcb from "./assests/facebook.svg" ; 
import yt from "./assests/youtube.svg" ;
import ig from "./assests/instagram.svg" ; 
function createHomePage() {
    const content = document.querySelector("#content");
    const homepage = document.createElement("div");
    homepage.classList.add("homepage");

    const welcomeText = document.createElement("div");
    welcomeText.textContent = "Welcome To lytiees";
    welcomeText.classList.add("welcome-text");
    homepage.appendChild(welcomeText);

    const introVid = document.createElement("video");
    introVid.src = introVideo ;
    introVid.autoplay = true;
    introVid.loop = true;
    introVid.volume = 0.05;
    introVid.width = 640;
    introVid.height = 360;
    homepage.appendChild(introVid);

    const infosection = document.createElement("div");
    infosection.classList.add("infos");

    const infosectionleftpart = document.createElement("div") ; 
    infosectionleftpart.classList.add("left") ; 
    const infosectionrightpart = document.createElement("div") ; 
    infosectionrightpart.classList.add("right") ; 

    const address = document.createElement("div") ; 
    address.textContent = "1 Chome-16-8 Minami"
    
    const phonenumber = document.createElement("div") ; 
    phonenumber.textContent = "0256-62-3707" ; 

    const closeDays = document.createElement("div") ;  
    closeDays.textContent = "Monday-Tuesday : closed" ; 

    const opendays = document.createElement("div") ; 
    opendays.textContent = "Wednesday-Sunday : 11am - 11pm" ; 


    infosectionleftpart.appendChild(address) ; 
    infosectionleftpart.appendChild(closeDays) ; 
    infosectionleftpart.appendChild(phonenumber) ; 
    infosectionleftpart.appendChild(opendays) ; 

    const fb = document.createElement("img") ; 
    const yti = document.createElement("img") ; 
    const insta = document.createElement("img") ;
    fb.src = fcb ; 
    fb.height = 50 ;
    fb.width = 50 

    yti.src = yt  ; 
    insta.src = ig ; 

    infosectionrightpart.appendChild(fb) ; 
    infosectionrightpart.appendChild(yti) ; 
    infosectionrightpart.appendChild(insta) ; 


    infosection.appendChild(infosectionleftpart) ; 
    infosection.appendChild(infosectionrightpart) ;
    welcomeText.appendChild(infosection);
    content.appendChild(homepage);
}

export default createHomePage;
