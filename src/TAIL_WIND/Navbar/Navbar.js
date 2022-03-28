import React, { useState } from "react";
import "./Navbar.css";

import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  // const route = [
  //   { id: 1, name: "", link: "/home" },
  //   { id: 1, name: "", link: "/shop" },
  //   { id: 1, name: "", link: "/coupons" },
  //   { id: 1, name: "", link: "/deals" },
  // ];

  const [menu, setMenu] = useState(false);
  return (
    <header className="bg-indigo-300">
      <div onClick={() => setMenu(!menu)} className="w-7 h-7 md:hidden cursor-pointer">
        {menu ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex md:static justify-evenly w-full bg-indigo-300 p-5 absolute duration-500 ease-out text-center ${
          menu ? "top-7" : "top-[-300px]"
        }`}
      >
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/coupons">Coupons</a>
        </li>
        <li>
          <a href="/deals">Deals</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
