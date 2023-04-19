import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import addIcon from "../../../assets/images/add_icon.svg";
import searchIcon from "../../../assets/images/search_icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="left-navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="TMDB Logo" />
        </Link>
        <ul className="navbar">
          <li className="dropdown-movies">
            <a href="#">Movies</a>
            {/* dropdown menu on hover */}
            <div className="dropdown-menu">
              <Link to="/movie" className="nav-a">
                Popular
              </Link>
              <Link className="nav-a">Now Playing</Link>
              <Link className="nav-a">Upcoming</Link>
              <Link className="nav-a">Top Rated</Link>
            </div>
            {/* dropdown ends here */}
          </li>
          <li className="dropdown-tvshow">
            <a href="#">TV Shows</a>
            {/* dropdown of tv shows on hover */}
            <div className="dropdown-menu-tv">
              <Link to="/" className="nav-a">
                Popular
              </Link>
              <Link className="nav-a">Airing Today</Link>
              <Link className="nav-a">On TV</Link>
              <Link className="nav-a">Top Rated</Link>
            </div>
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
