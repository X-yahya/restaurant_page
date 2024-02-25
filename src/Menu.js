import createElem from "./createElem";

export default function loadJapaneseMenu(selector) {
  const menuElement = new createElem("div")
    .addAttributes({ id: "menu-tab", class: "tab" })
    .addChild(new createElem("h1").setInnerText("Our Daily Menu"))
    .addChild(
      new createElem("div")
        .addAttributes({ class: "container-div", id: "menu-container" })
        .addChild(
          new createElem("img").addAttributes({
            class: "div-child",
            id: "menu-img",
          })
        )
        .addChild(
          new createElem("div")
            .addAttributes({ class: "div-child", id: "menu-child" })
            .addChild(new createElem("h2").setInnerText("Sushi"))
            .addChild(
              new createElem("ul")
                .addAttributes({ class: "menu-list", id: "sushi-list" })
                .addChild(new createElem("li").setInnerText("Nigiri"))
                .addChild(new createElem("li").setInnerText("Sashimi"))
                .addChild(new createElem("li").setInnerText("Maki Rolls"))
                .addChild(new createElem("li").setInnerText("Temaki"))
                .addChild(new createElem("li").setInnerText("Uramaki"))
            )
            .addChild(new createElem("h2").setInnerText("Noodles"))
            .addChild(
              new createElem("ul")
                .addAttributes({ class: "menu-list", id: "noodles-list" })
                .addChild(new createElem("li").setInnerText("Ramen"))
                .addChild(new createElem("li").setInnerText("Udon"))
                .addChild(new createElem("li").setInnerText("Soba"))
            )
            .addChild(new createElem("h2").setInnerText("Appetizers"))
            .addChild(
              new createElem("ul")
                .addAttributes({ class: "menu-list", id: "appetizers-list" })
                .addChild(new createElem("li").setInnerText("Edamame"))
                .addChild(new createElem("li").setInnerText("Gyoza"))
                .addChild(new createElem("li").setInnerText("Tempura"))
            )
        )
    );

  selector.appendChild(menuElement.load());
}
