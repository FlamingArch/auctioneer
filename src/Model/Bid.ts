export default class Bid {
  constructor(public bid: number, public user: number) {}

  compare(bid: Bid): boolean {
    return this.bid > bid.bid;
  }
}
