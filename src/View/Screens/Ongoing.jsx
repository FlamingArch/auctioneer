import React, { useContext } from "react";

import Card from "../Supporting/AuctionCard";
import Page from "../Supporting/Page";

import { AppContext } from "../../AppContext";
import { collection, getDocs } from "firebase/firestore";

import samples from "../../Resources/samples";

const Ongoing = () => {
  const { db } = useContext(AppContext);

  return (
    <Page header="Ongoing">
      {/* const querySnapshot = await getDocs(collection(db, "items"));'
      {querySnapshot.docs.map((doc) => (
        <Card key={doc.id} item={{ id: doc.id, ...doc.data() }} />
      ))} */}
      <Card item={samples.item} />
    </Page>
  );
};

export default Ongoing;
