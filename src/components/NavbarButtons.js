import React from "react";

const NavbarButtons = ({ label }) => {
  return (
    <a
      href="."
      className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {label}
    </a>
  );
};

export default NavbarButtons;
