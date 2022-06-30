import React, { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart-2.svg";
import Thumbnail from "./Thumbnail";
import FunctionButtons from "./FunctionButtons";
import images from "./images-data.js";

export const Body = ({ price, order, setOrder, items, setItems }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  function updateImage(ImageIDE) {
    setCurrentImage(images[ImageIDE]);
  }
  const addToCart = () => {
    if (items > 0) {
      setOrder(!order);
    }
  };

  const addItems = () => {
    if (items >= 0 && items < 10) {
      setItems(items + 1);
    } else {
    }
  };
  const subtractItems = () => {
    if (items > 0) {
      setItems(items - 1);
    } else {
    }
  };

  return (
    <div>
      <div className="lg:flex gap-x-28 justify-center md:pl-24 md:pt-24 md:pr-24 md:pb-24">
        <div className="w-96 sm:w-96 m:w-96">
          <div>
            <img src={currentImage} alt="sneakers" className="rounded-3xl" />
          </div>
          <div className="mt-8 flex space-x-3">
            <Thumbnail
              imageId={0}
              onClick={() => updateImage(0)}
              currentImage={currentImage}
            />
            <Thumbnail
              imageId={1}
              onClick={() => updateImage(1)}
              currentImage={currentImage}
            />
            <Thumbnail
              imageId={2}
              onClick={() => updateImage(2)}
              currentImage={currentImage}
            />
            <Thumbnail
              imageId={3}
              onClick={() => updateImage(3)}
              currentImage={currentImage}
            />
          </div>
        </div>
        <div className="mt-12 w-96">
          <div className="text-orange-300 tracking-widest font-bold">
            SNEAKER COMPANY
          </div>
          <div className="my-6 text-black text-4xl font-bold">
            Fall Limited Edition Sneakers
          </div>
          <div className="text-gray-600">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </div>
          <div className="flex md:block justify-between">
            <div className="my-4 flex space-x-10">
              <p className="font-bold text-2xl">${price}.00</p>
              <p className="text-orange-400 rounded-md bg-orange-100 w-16 text-center font-semibold text-xl">
                50%
              </p>
            </div>
            <div className="my-4 line-through font-bold text-gray-400">
              $250.00
            </div>
          </div>
          <div className="md:flex md:space-x-2">
            <div className="flex border w-96 md:w-36 h-12 my-2 justify-evenly rounded-md space-x-4 bg-slate-200">
              <FunctionButtons src={minus} onClick={subtractItems} />
              <div className="py-2">{items}</div>
              <FunctionButtons src={plus} onClick={addItems} />
            </div>
            <button
              className="flex border justify-center gap-x-4 my-2 pt-2 hover:bg-orange-300 bg-orange-400 md:w-60 w-96 h-12 text-center text-slate-100 rounded-md font-semibold"
              onClick={() => addToCart()}
            >
              <img src={cart} alt="cart" className="h-6" />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
