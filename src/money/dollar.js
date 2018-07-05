/* @flow */
export default class Dollar {

  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multipliter: number): Dollar {
    return new Dollar(this.amount * multipliter);
  }

  amount(): number {
    return this.amount;
  }
}
