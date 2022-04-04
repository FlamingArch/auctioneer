import React, { useContext } from "react";

import Card from "../Supporting/AuctionCard";

import { AppContext } from "../../Context";
import Page from "../Supporting/Page";
import { collection, getDocs } from "firebase/firestore";

const Ongoing = () => {
  const { db } = useContext(AppContext);

  const item = {
    active: true,
    bids: [
      { bid: 13.29, time: null, user: 123123 },
      { bid: 13.19, time: null, user: 212930 },
      { bid: 12.99, time: null, user: 42069 },
    ],
    category: {
      emoji: "💻",
      label: "Technology",
    },
    description:
      "Microsoft's super sucky iPad clone that is good for nothing, please take it away from me, I want a device that actually functions.",
    image_urls: [
      "https://unsplash.com/photos/JM5qCwvWgXw/download?ixid=MnwxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE2NDc4OTI4NDQ&force=true&w=1920",
      "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8559603/twarren_170512_1708_0002.0.jpg",
    ],
    initial_price: 12.99,
    name: "Surface Pro 8",
    tags: [
      "microsoft",
      "surface",
      "surface pro",
      "ipad",
      "ipad clone",
      "garbage",
      "pos",
      "windows",
      "windows sucks",
      "apple4lyf",
    ],
    user: 129021,
  };

  // const querySnapshot = await getDocs(collection(db, "items"));'

  return (
    <Page header="Ongoing">
      {/* {querySnapshot.docs.map((doc) => (
        <Card key={doc.id} item={{ id: doc.id, ...doc.data() }} />
      ))} */}
      <Card item={item} />
    </Page>
  );
};

export default Ongoing;
