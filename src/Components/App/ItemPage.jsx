//#region Imports
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../Context";
import { FirebaseContext } from "../Firebase";
import { v4 as uuidv4 } from "uuid";

import Button from "../Views/Button";
import Chip from "../Views/Chip";

import { CloseIcon, ShoppingIcon } from "../Views/Icons";
//#endregion

const ItemPage = ({ closeFunction }) => {
  //#region Hooks
  const { item } = useContext(AppContext);
  const { user, markSold, addBid } = useContext(FirebaseContext);

  const [price, setPrice] = useState(0);

  const [bidDisabled, setBidDisabled] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  window.onresize(() => {
    setWidth(window.innerWidth);
  });
  //#endregion

  return (
    <motion.div
      initial={{ translateX: width }}
      animate={{ translateX: 0 }}
      exit={{ translateX: width }}
      transition={{ duration: 0.4, stiffness: 50 }}
      className="absolute grid w-screen h-screen grid-cols-2 bg-white hide-scrollbar overflow-clip backdrop-filter backdrop-saturate-200 backdrop-blur-3xl bg-opacity-70"
    >
      {/* #region Images */}
      <div className="flex flex-col w-full h-full overflow-scroll hide-scrollbar">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-auto h-screen mb-1 rounded-none full-img-fit"
          />
        ))}
      </div>
      {/* #endregion */}

      <div className="flex flex-col">
        {/* #region Back Navigation, Heading and Category */}
        <motion.div
          animate={{
            translateY: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            stiffness: 50,
            ease: "easeIn",
          }}
          className="flex flex-col p-6 border-bottom"
        >
          <div className="flex justify-between place-items-center">
            <div className="flex gap-4 place-items-center">
              <Button type="icon" onClick={closeFunction}>
                <CloseIcon />
              </Button>
              <div className="text-2xl font-bold">{item.name}</div>
            </div>
            <div className="px-3 py-1 bg-blue-200 rounded-lg w-fit">
              {item.category}
            </div>
          </div>
          <p className="p-4">{item.description}</p>
        </motion.div>
        {/* #endregion */}

        {/* #region Seller Information */}
        <motion.div
          animate={{
            translateY: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            stiffness: 50,
            ease: "easeIn",
          }}
          className="flex flex-col p-6 border-bottom"
        >
          <div className="flex gap-3">
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
        </motion.div>
        {/* #endregion */}

        {/* #region Tags */}
        <motion.div
          animate={{
            translateY: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            stiffness: 50,
            ease: "easeIn",
          }}
          className="flex flex-col p-6 border-bottom"
        >
          <div className="font-bold">Tags</div>
          <div className="flex flex-wrap gap-2 pt-4">
            {item.tags && item.tags.map((t, i) => <Chip key={i}>{t}</Chip>)}
          </div>
        </motion.div>
        {/* #endregion */}

        {/* #region Bid */}
        <motion.div
          animate={{
            translateY: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            stiffness: 50,
            ease: "easeIn",
          }}
          className="flex flex-col items-stretch p-6"
        >
          {!(item.owner.uid == user.uid) && item.active && (
            <input
              type="text"
              className="w-full mb-4 custom-input"
              placeholder={`Enter amount greater than ${
                item.bids[item.bids.length - 1].price
              }`}
              onChange={(e) => {
                if (e.target.value > item.bids[item.bids.length - 1].price) {
                  setBidDisabled(false);
                } else {
                  setBidDisabled(true);
                }
              }}
            />
          )}
          <div className="flex gap-3">
            {item.owner.uid == user.uid ? (
              <Button
                className="expanded"
                type="primary"
                disabled={!item.active}
                onClick={() => {
                  markSold(item.id);
                }}
              >
                <ShoppingIcon />
                {item.active ? "Sell to Highest Bidder" : "Sold"}
              </Button>
            ) : (
              <Button
                className="expanded"
                type="primary"
                disabled={!item.active || bidDisabled}
                onClick={() => {
                  addBid(item.id, {
                    createdAt: Date.now(),
                    price: price,
                    user: user.uid,
                    userBio: "Just Here to sell some stuff",
                    userName: user.displayName,
                    userProfilePicture: user.photoURL,
                  });
                }}
              >
                <ShoppingIcon />
                {item.active ? "Place Bid" : "Sold"}
              </Button>
            )}
            {/* <Button type="primary" disabled={true}>
            <FavouritesIcon />
          </Button> */}
          </div>
        </motion.div>
        {/* #endregion */}

        {/* #region Pricing */}
        <motion.div
          animate={{
            translateY: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            stiffness: 50,
            ease: "easeIn",
          }}
          className="flex flex-col gap-3 p-4 border-bottom"
        >
          <div className="flex justify-between p-2">
            <p className="font-bold">{item.active ? "Current" : "Sold"} Bid</p>
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
        </motion.div>
        {/* #endregion */}

        {/* #region Bid History */}
        <motion.div
          animate={{
            translateY: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            stiffness: 50,
            ease: "easeIn",
          }}
          className="flex flex-col p-6 border-bottom"
        >
          <div className="pb-6 font-bold">Bids Already Made</div>
          {item.bids &&
            item.bids.map((bid, i) => (
              <div key={i} className="flex justify-between w-full">
                <div className="flex gap-3">
                  <img
                    src={bid.userProfilePicture}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">{bid.userName}</p>
                    <p className="">{bid.userBio}</p>
                  </div>
                </div>
                <div className="font-bold">
                  {i === 0 ? " (Initial)" : ""} {item.currency} {bid.price}
                </div>
              </div>
            ))}
        </motion.div>
        {/* #endregion */}
      </div>
    </motion.div>
  );
};

export default ItemPage;
