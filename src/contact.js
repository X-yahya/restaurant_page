import createElem from "./createElem";

export default function loadJapaneseContact(selector) {
  const contactElement = new createElem("div")
    .addAttributes({ id: "contact-tab", class: "tab" })
    .addChild(new createElem("h1").setInnerText("Contact Us"))
    .addChild(
      new createElem("div")
        .addAttributes({
          class: "container-div",
          id: "contact-container",
        })
        .addChild(
          new createElem("div")
            .addAttributes({
              class: "div-child",
              id: "contact-child",
            })
            .addChild(
              new createElem("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Visit Us")
            )
            .addChild(
              new createElem("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText(
                  "Experience the tranquility of Japan at our cafe, surrounded by serene Japanese gardens and the gentle presence of our resident cats."
                )
            )
            .addChild(
              new createElem("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Hours of Operation")
            )
            .addChild(
              new createElem("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("We are open from 9:00 AM to 10:00 PM, Tuesday to Sunday. Closed on Mondays.")
            )
            .addChild(
              new createElem("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Phone")
            )
            .addChild(
              new createElem("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("(123)456-7890")
            )
            .addChild(
              new createElem("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Email")
            )
            .addChild(
              new createElem("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("info@japanesecafesakura.com")
            )
        )
        .addChild(
          new createElem("div")
            .addAttributes({
              class: "div-child",
              id: "contact-child",
            })
            .addChild(
              new createElem("img").addAttributes({
                class: "tab-img",
                id: "contact-img",
              })
            )
            .addChild(
              new createElem("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Location")
            )
            .addChild(
              new createElem("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("123 Sakura Street, Cherry Blossom Town, Japan")
            )
        )
    );
  selector.appendChild(contactElement.load());
}
