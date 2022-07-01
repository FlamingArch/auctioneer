import Chip from "../Views/Chip";
import Button from "../Views/Button";
import { FavouritesIcon, ShoppingIcon } from "../Views/Icons";

import _ from "lodash";
import { motion } from "framer-motion";

import noimg from "../../Resources/no-img.png";
import { AppContext } from "../Context";
import { useContext } from "react";

const ItemCard = ({ item, index }) => {
  const { showItemPage } = useContext(AppContext);

  return (
    <motion.div
      animate={{ opacity: [0, 1], translateY: [25, 0] }}
      transition={{ duration: 0.15, delay: index * 0.05 }}
      className="cursor-pointer item-card h-min"
      onClick={() => showItemPage(item)}
    >
      <img src={item.images[0] ?? noimg} className="w-full rounded-t-xl" />
      <div className="flex flex-col gap-3 p-4 border-bottom">
        <p className="text-2xl font-bold">{item.name}</p>
        <div className="px-3 py-1 bg-blue-200 rounded-lg w-min">
          {item.category}
        </div>
        <p>
          {item.description.substring(0, 100) +
            (item.description.length >= 100 ? "..." : "") ??
            "No Description Provided"}
        </p>
      </div>
      <div className="flex gap-3 p-4 border-bottom">
        <img
          src={item.owner.profile_picture}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-bold">{item.owner.name}</p>
          <p className="">{item.owner.bio}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 border-bottom">
        <div className="flex justify-between p-2">
          <p className="font-bold">Current Bid</p>
          <div className="text-blue-600">
            {item.currency} {item.bids[item.bids.length - 1].price}
          </div>
        </div>
        <div className="flex justify-between p-2">
          <p className="font-bold">Initial Price</p>
          <div className="text-blue-600">
            {item.currency} {item.price}
          </div>
        </div>
      </div>
      <div className="p-4 border-bottom">
        Tags
        <div className="flex flex-wrap gap-2 pt-4">
          {item.tags && item.tags.map((t, i) => <Chip key={i}>{t}</Chip>)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <Button className="expanded" type="primary" disabled={!item.active}>
            <ShoppingIcon />
            {item.active ? "New Bid" : "Sold"}
          </Button>
          {/* <Button type="primary" disabled={true}>
            <FavouritesIcon />
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
