/* @flow */
export default class Dollar {

  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multipliter: number) {
    this.amount *= multipliter;
  }

  amount(): number {
    return this.amount;
  }
}
