import Category from "./Category";
import Bid from "./Bid";

export default class Item {
  name: string;
  description: string;
  tag: Category;
  bids: Bid[];
  user: number;
  active: boolean;

  constructor(name, user_id) {
    this.name = name;
    this.bids = new Array<Bid>();
    this.user = user_id;
  }

  addBid(bid: Bid) {
    if (this.bids[0].compare(bid)) {
      throw new Error("Current bid lower than last bid.");
    } else {
      this.bids.unshift(bid);
    }
  }

  sell() {
    this.active = false;
  }

  getLatestBid() {
    return this.bids[0];
  }
}
