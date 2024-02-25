import createElem from "./createElem";

export default function loadHome(selector) {
  const homeElement = new createElem("div")
    .addAttributes({ id: "home-tab", class: "tab" })
    .addChild(new createElem("h1").setInnerText("Welcome to Sakura Savor"))
    .addChild(
      new createElem("img").addAttributes({ class: "tab-img", id: "home-img" })
    )
    .addChild(
      new createElem("p")
        .addAttributes({ class: "blurb" })
        .setInnerText(
          "Immerse yourself in the enchanting flavors of Japan at Sakura Savor. From delicate sushi rolls to savory ramen bowls, our menu invites you on a culinary journey through the Land of the Rising Sun."
        )
    )
    .addChild(new createElem("h2").setInnerText("Embrace the Essence"))
    .addChild(
      new createElem("p").setInnerText(
        "At Sakura Savor, we strive to capture the essence of Japanese cuisine in every bite, blending traditional techniques with modern interpretations to create a dining experience that is both authentic and innovative."
      )
    );

  selector.appendChild(homeElement.load());
}
