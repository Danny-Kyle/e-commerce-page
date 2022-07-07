import React, { useState } from "react";
import { Body } from "./components/Body";
import { Navbar } from "./components/Navbar";
const PRICE = 125;

const App = () => {
  const [items, setItems] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const eventualPrice = items * PRICE;

  const deleteFromCart = () => {
    setCart(false);
    setItems(0);
  };

  return (
    <div className="lg:ml-24 lg:mr-24">
      <Navbar
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
        toggleMenu={toggleMenu}
        items={items}
        price={PRICE}
        cart={cart}
        deleteFromCart={deleteFromCart}
        setToggleMenu={setToggleMenu}
        eventualPrice={eventualPrice}
      />
      <Body
        price={PRICE}
        items={items}
        setItems={setItems}
        eventualPrice={eventualPrice}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default App;
