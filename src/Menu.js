
import createElem from "./createElem";
import foodImg from './assests/icon.png'
export default function loadJapaneseMenu(selector) {
  const menuElement = new createElem("div")
    .addAttributes({ id: "menu-tab", class: "tab" })
    .addChild(new createElem("h1").setInnerText("Our Daily Menu"))
    .addChild(
      new createElem("div")
        .addAttributes({ class: "container-div", id: "menu-container" })        
            .addChild(
              new createElem("div")
                .addAttributes({ class: "sushi"})
                .addChild(
                  new createElem("h1")
                    .setInnerText("FOOD"))
                    .addChild(new createElem("img").addAttributes({
                      src: foodImg,
                      alt: "Nigiri"
                    }))
                )
                .addChild(
                  new createElem("div")
                    .addAttributes({ class: "sushi"})
                    .addChild(
                      new createElem("h1")
                        .setInnerText("FOOD"))
                        .addChild(new createElem("img").addAttributes({
                          src: foodImg,
                          alt: "Nigiri"
                        }))
                    )
                    .addChild(
                      new createElem("div")
                        .addAttributes({ class: "sushi"})
                        .addChild(
                          new createElem("h1")
                            .setInnerText("FOOD"))
                            .addChild(new createElem("img").addAttributes({
                              src: foodImg,
                              alt: "Nigiri"
                            }))
                        )
                        .addChild(
                          new createElem("div")
                            .addAttributes({ class: "sushi"})
                            .addChild(
                              new createElem("h1")
                                .setInnerText("FOOD"))
                                .addChild(new createElem("img").addAttributes({
                                  src: foodImg,
                                  alt: "Nigiri"
                                }))
                            )
              
    )
          
    selector.appendChild(menuElement.load());
  
  }
