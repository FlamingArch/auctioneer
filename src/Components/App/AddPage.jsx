import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../Views/Button";
import Chip from "../Views/Chip";
import { AddIcon, CloseIcon } from "../Views/Icons";

import { FirebaseContext } from "../Firebase";
import { motion } from "framer-motion";

const AddPage = ({ closeFunction }) => {
  const [height, setheight] = useState(window.innerHeight);

  window.onresize(() => {
    setheight(window.innerHeight);
  });

  const { addItem, user } = useContext(FirebaseContext);

  const [tags, setTags] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [images, setImages] = useState([]);

  const [price, setPrice] = useState(0);

  const [imageInput, setImageInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  return (
    <motion.div
      initial={{ backdropFilter: "none", backgroundColor: "transparent" }}
      animate={{
        backdropFilter: "blur(3rem)",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
      exit={{ backdropFilter: "blur(0rem)", backgroundColor: "transparent" }}
      className="z-10 p-8 add-page"
    >
      <motion.div
        initial={{ translateY: height }}
        animate={{ translateY: 0 }}
        exit={{ translateY: height }}
        className="flex flex-col gap-4 m-8 bg-white rounded-2xl dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <HeaderandBasics /> */}
        <div className="flex flex-col gap-4 p-4 border-b-2">
          <div className="flex gap-4 place-items-center">
            <Button type="icon" onClick={closeFunction}>
              <CloseIcon />
            </Button>
            <h2>Add Item</h2>
          </div>
          <input
            type="text"
            className="custom-input"
            placeholder="Name of Item"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="custom-input"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            className="custom-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* <Price /> */}
        <div className="flex flex-col gap-4 p-4 pt-0 border-b-2">
          <input
            type="number"
            className="custom-input"
            placeholder="Initial Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {/* <Images /> */}
        <div className="flex flex-col gap-4 p-4 border-b-2">
          <div className="transition-all bg-white shadow-none outline-none rounded-xl hover:shadow-xl focus-within:shadow-lg hover:z-10">
            <div className="flex">
              <input
                type="text"
                className="shadow-none outline-none custom-input expanded bg-none hover:shadow-none focus-within:shadow-none"
                placeholder="Images"
                value={imageInput}
                onChange={(e) => {
                  setImageInput(e.target.value);
                }}
              />
              <Button
                type="icon"
                onClick={() => {
                  setImages([...images, imageInput]);
                  setImageInput("");
                }}
                disabled={!imageInput}
              >
                <AddIcon className="icon-black" />
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 p-4">
            {images.map((tag) => (
              <img className="image-tile" src={tag} />
            ))}
            <div className="italic text-gray-300">
              {images.length == 0 ? "Enter Images Above" : null}
            </div>
          </div>
        </div>
        {/* <Tags /> */}
        <div className="flex flex-col gap-4 p-4 border-b-2">
          <div className="transition-all bg-white shadow-none outline-none rounded-xl hover:shadow-xl focus-within:shadow-lg hover:z-10">
            <div className="flex">
              <input
                type="text"
                className="shadow-none outline-none custom-input expanded bg-none hover:shadow-none focus-within:shadow-none"
                placeholder="Tags"
                value={tagInput}
                onChange={(e) => {
                  setTagInput(e.target.value);
                }}
              />
              <Button
                type="icon"
                onClick={() => {
                  setTags([...tags, tagInput]);
                  setTagInput("");
                }}
                disabled={!tagInput}
              >
                <AddIcon className="icon-black" />
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 p-4">
            {tags.map((tag) => (
              <Chip>{tag}</Chip>
            ))}
            <div className="italic text-gray-300">
              {tags.length == 0 ? "Enter Images Above" : null}
            </div>
          </div>
        </div>
        {/* <Submit /> */}
        <div className="flex flex-col gap-4 p-4 pt-0">
          <Button
            type="primary"
            disabled={
              title === "" ||
              category === "" ||
              description === "" ||
              price == null ||
              price == 0.0
            }
            onClick={() => {
              addItem({
                active: true,
                bids: [
                  {
                    price: price,
                    user: user.uid,
                    userName: user.displayName,
                    userBio: "Just Here to sell some stuff",
                    userProfilePicture: user.photoURL,
                    createdAt: Date.now(),
                  },
                ],
                category: category,
                createdAt: Date.now(),
                currency: "USD",
                description: description,
                favoritedBy: [],
                images: images,
                id: uuidv4(),
                name: title,
                owner: {
                  name: user.displayName,
                  bio: "Just Here to sell some stuff",
                  profile_picture: user.photoURL,
                  uid: user.uid,
                },
                price: price,
                tags: tags,
              });
              closeFunction();
            }}
          >
            Add
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddPage;
