import createElem from "./createElem";

export default function loadHome(selector) {
  const homeElement = new createElem("div")
    .addAttributes({class: "tab"})
    .addChild(new createElem("h1").setInnerText("Welcome to lyt Cofee Shop"))
    .addChild(
      new createElem("p").setInnerText("Nestled beneath a canopy of twinkling fairy lights, this quaint cafe exudes warmth and charm. Aromas of freshly brewed coffee mingle with the tantalizing scent of pastries, drawing patrons into a cozy haven of rustic décor and soft jazz melodies. With plush seating nooks and sunlit corners, it's a sanctuary for indulging in culinary delights and heartfelt conversations."))
    .addChild(new createElem("img").addAttributes({id:"home-img"}))

  selector.appendChild(homeElement.load());
}
