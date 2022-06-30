import React, { useState } from "react";
import { Body } from "./components/Body";
import { Navbar } from "./components/Navbar";

const App = () => {
  const price = 125;
  const [items, setItems] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [order, setOrder] = useState(false);
  const eventualPrice = items * price;
  const deleteFromCart = () => {
    setItems(items - items);
  };

  return (
    <div className="lg:ml-24 lg:mr-24">
      <Navbar
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
        toggleMenu={toggleMenu}
        items={items}
        price={price}
        order={order}
        deleteFromCart={deleteFromCart}
        setToggleMenu={setToggleMenu}
        eventualPrice={eventualPrice}
      />
      <Body
        price={price}
        items={items}
        setItems={setItems}
        eventualPrice={eventualPrice}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};

export default App;
