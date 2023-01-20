import { Bird } from "./Bird";

export class NorwegianBlueParrot extends Bird {
  getPlumage(): string | undefined {
    return this.voltage && this.voltage > 100 ? "scorched" : "beautiful";
  }
}
