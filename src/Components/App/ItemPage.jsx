import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../Context";

import Button from "../Views/Button";
import Chip from "../Views/Chip";

import { CloseIcon, ShoppingIcon } from "../Views/Icons";

const ItemPage = ({ closeFunction }) => {
  const { item } = useContext(AppContext);

  const [width, setWidth] = useState(window.innerWidth);

  window.onresize(() => {
    setWidth(window.innerWidth);
  });

  return (
    <motion.div
      animate={{
        translateX: [width, 0],
      }}
      transition={{ duration: 0.4, stiffness: 50 }}
      className="absolute grid w-screen h-screen grid-cols-2 bg-white hide-scrollbar overflow-clip backdrop-filter backdrop-saturate-200 backdrop-blur-3xl bg-opacity-70"
    >
      <div className="flex flex-col w-full h-full overflow-scroll hide-scrollbar">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full h-screen full-img-fit"
          />
        ))}
      </div>
      <div className="flex flex-col">
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
          <div className="flex place-items-center">
            <Button type="icon" onClick={closeFunction}>
              <CloseIcon />
            </Button>
            <div className="text-2xl font-bold">{item.name}</div>
          </div>
          <p className="p-4">{item.description}</p>
        </motion.div>
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
          <div className="flex gap-3">
            <Button className="expanded" type="primary" disabled={!item.active}>
              <ShoppingIcon />
              {item.active ? "New Bid" : "Sold"}
            </Button>
            {/* <Button type="primary" disabled={true}>
            <FavouritesIcon />
          </Button> */}
          </div>
        </motion.div>

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
        </motion.div>

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
              <div className="flex justify-between w-full">
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
      </div>
    </motion.div>
  );
};

export default ItemPage;
