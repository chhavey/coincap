import React from "react";
import style from "./navbar.module.css";
import coincap from "../../assets/coincap.svg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <span>Coins</span>
        <span>Exchanges</span>
        <span>Swap</span>
      </div>
      <div className={style.coincap}>
        <img src={coincap} alt="coincap" />
      </div>
      <div className={style.right}>
        <div>
          USD &nbsp; <IoMdArrowDropdown />
        </div>
        <div>
          English &nbsp; <IoMdArrowDropdown />
        </div>
        <div>
          <FaSearch />
        </div>
        <div>
          <IoSettingsSharp />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
