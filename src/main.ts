type Bird = {
  type: string;
  numberOfCoconuts?: number;
  voltage?: number;
  isNailed?: boolean;
};

const birds: Bird[] = [
  {
    type: "EuropeanSwallow",
  },
  {
    type: "AfricanSwallow",
    numberOfCoconuts: 3,
  },
  {
    type: "NorwegianBlueParrot",
    voltage: 150,
    isNailed: false,
  },
];

function getPlumage(bird: Bird): string | undefined {
  switch (bird.type) {
    case "EuropeanSwallow":
      return "average";
    case "AfricanSwallow":
      return bird.numberOfCoconuts && bird.numberOfCoconuts > 2
        ? "tired"
        : "average";
    case "NorwegianBlueParrot":
      return bird.voltage && bird.voltage > 100 ? "scorched" : "beautiful";
    default:
      null;
  }
}

function getVelocity(bird: Bird): number | undefined {
  switch (bird.type) {
    case "EuropeanSwallow":
      return 35;
    case "AfricanSwallow":
      return bird.numberOfCoconuts ? 40 - 2 * bird.numberOfCoconuts : 0;
    case "NorwegianBlueParrot":
      return bird.isNailed ? 0 : bird.voltage ? 10 + bird.voltage / 10 : 0;
    default:
      null;
  }
}
