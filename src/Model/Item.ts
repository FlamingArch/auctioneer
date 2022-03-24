import { v4 as uuid } from "uuid";

import Category from "./Category";
import Bid from "./Bid";

export default class Item {
  id: string;
  image_urls: string[];
  name: string;
  description: string;
  cateory: Category;
  bids: Bid[];
  user: number;
  active: boolean;
  tags: string[];

  constructor(
    image_urls: string[],
    name: string,
    description: string,
    category: Category,
    initialPrice: number,
    user_id: number,
    tags: string[]
  ) {
    this.id = uuid();
    this.image_urls = image_urls;
    this.name = name;
    this.description = description;
    this.cateory = category;
    this.bids = new Array<Bid>();
    this.addBid(new Bid(initialPrice, user_id));
    this.user = user_id;
    this.tags = tags;
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
