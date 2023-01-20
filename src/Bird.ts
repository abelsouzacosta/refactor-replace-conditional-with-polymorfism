export class Bird {
  constructor(
    protected readonly numberOfCoconuts?: number,
    protected readonly voltage?: number,
    protected readonly isNailed?: boolean
  ) {}

  getPlumage(): string | undefined {
    return undefined;
  }

  getVelocity(): number | undefined {
    return undefined;
  }
}
