export default class Item {
  active = false;
  bids: Bid[];
  createdAt = new Date();
  description: string;
  images: string[];
  name: string;
  owner: Owner;
  price: number;
  tags: string[];

  constructor(
    user: any,
    name: string,
    description: string,
    images: string[],
    initial_price: number,
    tags: string[]
  ) {
    this.bids = [
      {
        user: user.id,
        price: initial_price,
        createdAt: new Date(),
      },
    ];
    this.description = description;
    this.images = images;
    this.name = name;
    this.owner = {
      name: user.name,
      bio: "Just Here to Sell Some Stuff",
      uid: user.id,
    };
    this.price = initial_price;
    this.tags = tags;
  }
}

interface Bid {
  price: number;
  user: string;
  createdAt: Date;
}

interface Owner {
  name: string;
  bio?: string;
  uid: string;
}
