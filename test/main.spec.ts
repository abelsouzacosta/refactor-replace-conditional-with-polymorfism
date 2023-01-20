import { getPlumage, getVelocity } from "../src/main";

describe("getPlumage", () => {
  it("should return average if european swallow is provided", () => {
    let bird = {
      type: "EuropeanSwallow",
    };
    let result = getPlumage(bird);
    expect(result).toBe("average");
  });

  it("should return average for african swallow", () => {
    let bird = {
      type: "AfricanSwallow",
      numberOfCoconuts: 1,
    };
    let result = getPlumage(bird);
    expect(result).toBe("average");
  });

  it("should return tired for african swallow", () => {
    let bird = {
      type: "AfricanSwallow",
      numberOfCoconuts: 4,
    };
    let result = getPlumage(bird);
    expect(result).toBe("tired");
  });

  it("should return beautiful for norwegian blue parrot", () => {
    let bird = {
      type: "NorwegianBlueParrot",
      voltage: 50,
    };
    let result = getPlumage(bird);
    expect(result).toBe("beautiful");
  });

  it("should return scorched for norwegian blue parrot", () => {
    let bird = {
      type: "NorwegianBlueParrot",
      voltage: 150,
    };
    let result = getPlumage(bird);
    expect(result).toBe("scorched");
  });
});

describe("getVelocity", () => {
  it("should return 35 if european swallow is provided", () => {
    let bird = {
      type: "EuropeanSwallow",
    };
    let result = getVelocity(bird);
    expect(result).toBe(35);
  });

  it("should return 36 for african swallow", () => {
    let bird = {
      type: "AfricanSwallow",
      numberOfCoconuts: 2,
    };
    let result = getVelocity(bird);
    expect(result).toBe(36);
  });

  it("should return 0 for norwegian blue parrot", () => {
    let bird = {
      type: "NorwegianBlueParrot",
      isNailed: true,
    };
    let result = getVelocity(bird);
    expect(result).toBe(0);
  });

  it("should return 25 for norwegian blue parrot", () => {
    let bird = {
      type: "NorwegianBlueParrot",
      isNailed: false,
      voltage: 150,
    };
    let result = getVelocity(bird);
    expect(result).toBe(25);
  });
});
