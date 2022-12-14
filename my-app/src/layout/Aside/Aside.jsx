import React, { useState } from "react";
import Link from "react-router-dom";
import styleAside from "./style.css";
import { IconContext } from "react-icons";
import { SideData } from "./DataAside";
import { FaColumns, FaBars, FaWindowClose, FaInfoCircle } from "react-icons/fa";
import menu from '../../img/menu-button-of-three-horizontal-lines.png'
import close from '../../img/close.png'
const Aside = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <a href="#" className="menu_bars">
            {/* <FaBars  /> */}
            <img src={menu} alt="" onClick={showSidebar} />
          </a>
        </div>
        {/* <nav className={sidebar ? "nav_menu active" : " nav_menu"}> */}
        <nav className="nav_menu active">
          <ul className="nav_menu_items" onClick={showSidebar}>
            <li className="nav_toogle">
              <a href="#">
                <img src={close} alt="" />
                {/* <FaWindowClose /> */}
              </a>
            </li>
            {SideData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span className="spn">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default Aside;
