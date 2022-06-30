import React from 'react'
import NavbarButtons from "./NavbarButtons";

export const Sidebar = ({toggleMenu}) => {
  return (
    <div className={`flex-1 md:flex ${toggleMenu ? "bg-white w-1/2 left-0 h-full absolute overflow-hidden py-2 mt-12 z-20" : "hidden"}  md:items-center md:justify-between`}>
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <NavbarButtons label="Collections" />
                <NavbarButtons label="Men" />
                <NavbarButtons label="Women" />
                <NavbarButtons label="About" />
                <NavbarButtons label="Contact" />
              </div>
            </div>
  )
}
