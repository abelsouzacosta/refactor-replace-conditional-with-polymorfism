import { AfricanSwallow } from "./AfricanSwallow";
import { Bird } from "./Bird";
import { EuropeanSwallow } from "./EuropeanSwallow";
import { NorwegianBlueParrot } from "./NorwegianBlueParrot";

function createBird(type: string): Bird {
  let bird;
  switch (type) {
    case "EuropeanSwallow":
      bird = new EuropeanSwallow();
    case "AfricanSwallow":
      bird = new AfricanSwallow();
    case "NorwegianBlueParrot":
      bird = new NorwegianBlueParrot();
    default:
      bird = new Bird();
  }
  return bird;
}
