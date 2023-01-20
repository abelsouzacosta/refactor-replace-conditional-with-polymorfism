import { Bird } from "./Bird";

export class EuropeanSwallow extends Bird {
  getPlumage(): string | undefined {
    return "average";
  }
}
