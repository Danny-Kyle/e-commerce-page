import React from "react";
import thumbnail from "../images/image-product-0-thumbnail.jpg";
import Bin from "../images/icon-delete.svg";

export const CartCheckout = ({
  cart,
  deleteFromCart,
  price,
  eventualPrice,
  items,
}) => {
  //   const checkout =
  return (
    // <div className={`py-4 ${cart && items > 0 ? "visible" : "hidden"} px-2`}>
      <div className={`py-4 ${cart && items > 0 ? "visible" : "hidden"} px-2`}>
      <div className="flex gap-x-3 py-2">
        <div className="flex gap-x-2">
          <img src={thumbnail} alt="" className="rounded-lg h-12 w-12" />
          <div className="text-xs">
            <p>Fall Limited Edition Sneakers</p>
            <div className="flex gap-x-2">
              <p>${price}.00 x </p>
              <p>{items}</p>
              <p className="font-bold">${eventualPrice}.00</p>
            </div>
          </div>
        </div>
        <div>
          <button>
            <img src={Bin} alt="delete" onClick={deleteFromCart} />
          </button>
        </div>
      </div>
      <button className="text-slate-100 rounded-lg py-2 border w-56 bg-orange-400">
        Checkout
      </button>
    </div>
  );
};

export default CartCheckout;
