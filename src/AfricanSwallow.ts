import { Bird } from "./Bird";

export class AfricanSwallow extends Bird {
  getPlumage(): string | undefined {
    return this.numberOfCoconuts && this.numberOfCoconuts > 2
      ? "tired"
      : "average";
  }
}
