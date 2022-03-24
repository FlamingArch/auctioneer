import { v4 as uuid } from "uuid";

export default class User {
  id: string;
  sold: string[];
  bought: string[];
  balance: number;

  constructor(
    public name: string,
    public bio: string,
    public profile_picture_url: string
  ) {
    this.id = uuid();
    this.sold = [];
    this.bought = [];
    this.balance = 0;
  }

  addBalance(amount: number) {
    this.balance += amount;
  }

  removeBalance(amount: number) {
    this.balance -= amount;
  }

  addSellItem(item_id: string) {
    this.sold.push(item_id);
  }

  addBuyItem(item_id: string) {
    this.bought.push(item_id);
  }
}
