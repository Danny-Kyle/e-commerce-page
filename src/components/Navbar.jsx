import React from "react";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import svg from "../images/icon-cart.svg";
import NavbarButtons from "./NavbarButtons";
import NavbarIconButtons from "./NavbarIconButtons";
import MenuIcon from "../images/icon-menu.svg";
import MenuClose from "../images/icon-close.svg";
import CartCheckout from "./CartCheckout";

export const Navbar = ({
  toggleDropdown,
  items,
  eventualPrice,
  price,
  cart,
  setToggleDropdown,
  toggleMenu,
  deleteFromCart,
  setToggleMenu,
}) => {
  return (
    <div className="w-[100%]">
      <nav className="bg-white shadow">
        <div className="px-6 py-4 mx-auto">
          <div className="flex md:items-center md:justify-between">
            <div className="flex gap-x-4 items-center md:justify-between">
              <div className="flex md:hidden">
                <button
                  type="button"
                  className={`text-gray-500 dark:text-gray-200 ${
                    toggleMenu === false ? "visible" : "hidden"
                  } hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400`}
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <img src={MenuIcon} alt="MenuIcon" />
                </button>
                <button
                  type="button"
                  className={`text-gray-500 dark:text-gray-200 ${
                    toggleMenu === false ? "hidden" : "visible"
                  } hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400`}
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <img src={MenuClose} alt="MenuIcon" />
                </button>
              </div>

              <div>
                <img src={logo} alt="sneakers" className="h-8 w-56" />
              </div>
            </div>

            <div
              className={`flex-1 md:flex ${
                toggleMenu
                  ? "bg-white w-1/2 left-0 h-full absolute overflow-hidden py-2 mt-12 z-20"
                  : "hidden"
              }  md:items-center md:justify-between`}
            >
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <NavbarButtons label="Collections" />
                <NavbarButtons label="Men" />
                <NavbarButtons label="Women" />
                <NavbarButtons label="About" />
                <NavbarButtons label="Contact" />
              </div>
            </div>

            <div className="flex items-center lg:gap-x-8 mt-4 md:mt-0">
              <div className="relative inline-block">
                <div
                  className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                >
                  <NavbarIconButtons src={svg} alt="cart" />
                </div>

                <div
                  className={`absolute right-0 ${
                    toggleDropdown ? "" : "hidden"
                  } z-20 w-64 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 `}
                >
                  <h1 className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <div className="mx-1">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 border:bottom ">
                        Cart
                      </p>
                    </div>
                  </h1>

                  <hr className="border-gray-200 dark:border-gray-700" />
                  <div>
                    {cart ? (
                       <CartCheckout
                       items={items}
                       eventualPrice={eventualPrice}
                       deleteFromCart={deleteFromCart}
                       price={price}
                       cart={cart}
                     />
                    ) : (
                      <p
                        className={`block px-4 ${
                          ''
                        } py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`}
                      >
                        Your Cart is Empty
                      </p>
                     
                    )}
                  </div>
                </div>
              </div>

              <div type="button" className="flex items-center">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <NavbarIconButtons
                    src={avatar}
                    alt="avatar"
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                  />
                </div>
                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 hidden">
                  User 1
                </h3>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
