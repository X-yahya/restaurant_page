import createElem from "./createElem";




export default function loadStructure()

{   

const nav = new createElem("nav")
.addChild(new createElem("button")
.addAttributes({class:"Home"} 
).setInnerText("Home"))
.addChild(new createElem("button")
.addAttributes({class:"Menu"} 
).setInnerText("Menu"))
.addChild(new createElem("button")
.addAttributes({class:"Contact"} 
).setInnerText("Contact"));
document.body.appendChild(nav.load());


const content = new createElem("div")
.addAttributes({class:"content"}) ; 
document.body.appendChild(content.load());
}
