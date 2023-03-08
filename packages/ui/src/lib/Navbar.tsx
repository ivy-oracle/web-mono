import classNames from "classnames";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export interface MenuItem {
  path: string;
  label: string;
  Icon: React.ElementType;
}

export interface NavbarProps {
  brandName?: string;
  brandLink?: string;
  transparent?: boolean;
  menuItems: MenuItem[];
}

const Navbar = ({
  brandName = "Ivy Oracle",
  brandLink = "https://ivyoracle.xyz",
  transparent = true,
  menuItems,
}: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={
        (transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div
            className={classNames(
              transparent ? "text-white" : "text-gray-800",
              "title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            )}
          >
            <a href={brandLink}>{brandName}</a>
          </div>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars
              className={transparent ? "text-white" : "text-gray-800"}
            ></FaBars>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            {menuItems.map((menuItem) => (
              <li key={menuItem.path} className="flex items-center">
                <a href={menuItem.path}>
                  <div
                    className={
                      (transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:cursor-pointer w-full hover:bg-slate-100 sm:hover:bg-transparent"
                    }
                  >
                    <menuItem.Icon
                      className={classNames(
                        transparent
                          ? "lg:text-gray-300 text-gray-500"
                          : "text-gray-500",
                        "text-lg leading-lg mr-2"
                      )}
                    />{" "}
                    {menuItem.label}
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li className="flex items-center">{/* <Dropdown /> */}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
