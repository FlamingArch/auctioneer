export default class Item {
  active: boolean;
  bids: {
    bid: number;
    time: string;
    user: string;
  }[];
  bookmark: boolean;
  category: { emoji: string; label: string };
  description: string;
  image_urls: string[];
  initial_price: number;
  name: string;
  tags: string[];
  user: string;

  constructor(data: any) {
    this.active = data.active ?? true;
    this.bids = data.bids ?? [];
    this.bookmark = data.bookmarks ?? false;
    this.category = data.category;
    this.description = data.description;
    this.image_urls = data.image_urls;
    this.initial_price = data.initial_price;
    this.name = data.name;
    this.tags = data.tags;
    this.user = data.user;
  }

  markSold = () => (this.active = false);

  addBid = (bid: number, user: string, time: string) =>
    this.bids.unshift({ bid, user, time });

  toggleBookmark = () => (this.bookmark = !this.bookmark);
}
