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

  static getUser(id: string) {
    let user = new User(
      "Jane Doe",
      "Just here to sell some stupid stuff I own.",
      "https://unsplash.com/photos/HA5rQ_XfBD0/download?ixid=MnwxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNjQ3ODkyODQ0&force=true&w=1920"
    );
    user.addBalance(69420);
    return user;
  }
}
