export class Random {
  static genNumber(min: number = 0, max: number = Number.MAX_VALUE): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
