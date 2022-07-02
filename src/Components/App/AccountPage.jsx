import React from "react";
import TopBar from "./TopBar";
import ListItem from "../Views/ListItem";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { AppContext } from "../Context";
import List from "../Views/List";
import { ForwardIcon } from "../Views/Icons";

import noimg from "../../Resources/no-img.png";

const AccountPage = () => {
  const { showItemPage } = useContext(AppContext);
  const { user, items } = useContext(FirebaseContext);

  return (
    <div className="px-10 content">
      <TopBar />
      <List
        heading="Personal Details"
        subtitle="These details are only visible to you."
      >
        <ListItem>
          Photo
          <div className="center">
            <img
              className="user-avatar"
              src={user.photoURL}
              alt="Profile Picture"
            />
          </div>
        </ListItem>
        <ListItem>
          <p>Name</p>
          <p className="opacity-60">{user.displayName}</p>
        </ListItem>
        <ListItem>
          <p>Email</p>
          <p className="opacity-60">{user.email}</p>
        </ListItem>
        <ListItem>
          <p>Email Verified</p>
          <p className="opacity-60">{user.emailVerified ? "Yes" : "No"}</p>
        </ListItem>
        <ListItem>
          <p>Phone</p>
          <p className="opacity-60">{user.phoneNumber ?? "Not Specified"}</p>
        </ListItem>
      </List>
      <List heading="Sold Items" subtitle="Items you sold will appear here.">
        {items.map((item, i) =>
          item.sold ? (
            <ListItem key={i} onClick={() => showItemPage(item)}>
              <div className="flex gap-4">
                <img
                  src={item.images[0] ?? noimg}
                  className="w-24 h-24 shadow-md rounded-xl"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="">{item.description}</p>
                  <p className="font-bold text-blue-600">
                    Sold For {item.currency}{" "}
                    {item.bids[item.bids.length - 1].price}
                  </p>
                </div>
              </div>
              <ForwardIcon />
            </ListItem>
          ) : null
        )}
      </List>
    </div>
  );
};

export default AccountPage;
