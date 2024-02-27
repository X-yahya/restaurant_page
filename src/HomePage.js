import createElem from "./createElem";

export default function loadHome(selector) {
  const homeElement = new createElem("div")
    .addAttributes({class: "tab"})
    .addChild(new createElem("h1").setInnerText("Welcome to lyt Cofee Shop"))
    .addChild(
      new createElem("img").addAttributes({id:"home-img"})
    )

  selector.appendChild(homeElement.load());
}
