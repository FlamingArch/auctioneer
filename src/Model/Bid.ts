export default class Bid {
  time: Date;
  constructor(public bid: number, public user: number) {
    this.time = new Date();
  }

  compare(bid: Bid): boolean {
    return this.bid > bid.bid;
  }
}
