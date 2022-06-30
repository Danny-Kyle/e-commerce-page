import React from "react";

const NavbarIconButtons = ({ src, alt, onClick }) => {
  return (
    <button onClick={() => onClick()}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default NavbarIconButtons;
