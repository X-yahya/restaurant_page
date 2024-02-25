import createElem from "./createElem";







function HomePage()
{
    const nav = new createElem("nav")
    .addChild(new createElem("button")
    .addAttributes({class:"Home"} 
   ) .setInnerText("Home"))
   .addChild(new createElem("button")
    .addAttributes({class:"Menu"} 
   ) .setInnerText("Menu"))
   .addChild(new createElem("button")
    .addAttributes({class:"Contact"} 
   ) .setInnerText("Contact"));

    document.body.appendChild(nav.load());
}


export default HomePage() ; 
