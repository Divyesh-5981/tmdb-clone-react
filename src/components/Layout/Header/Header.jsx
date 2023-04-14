import React from "react";
import logo from "../../../assets/images/logo.svg";
import addIcon from "../../../assets/images/add_icon.svg";
import searchIcon from "../../../assets/images/search_icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="left-navbar">
        <a className="logo">
          <img src={logo} alt="TMDB Logo" />
        </a>
        <ul className="navbar">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div>
      <div className="right-navbar">
        <ul className="">
          <li className="add-Icon">
            <a href="#">
              <img src={addIcon} alt="Add Icon" />
            </a>
          </li>
          <li>
            <div className="translate-lan">EN</div>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Join TMDB</a>
          </li>
          <li>
            <a href="#">
              <img src={searchIcon} alt="Search Icon" className="search-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
