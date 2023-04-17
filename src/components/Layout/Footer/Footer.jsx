import React from "react";
import footerLogo from "../../../assets/images/footer_logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-div mr">
        <img src={footerLogo} alt="TMDB Logo" className="tmdb-footer-logo" />
        <a href="#">JOIN THE COMMUNITY</a>
      </div>
      <div className="info-div mr">
        <h3>THE BASICS</h3>
        <ul>
          <li>
            <a href="#">About TMDB</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Support Forums</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">System Status</a>
          </li>
        </ul>
      </div>
      <div className="info-div mr">
        <h3>GET INVOLVED</h3>
        <ul>
          <li>
            <a href="#">Contribution Bible</a>
          </li>
          <li>
            <a href="#">Add New Movie</a>
          </li>
          <li>
            <a href="#">Add New TV Show</a>
          </li>
        </ul>
      </div>
      <div className="info-div mr">
        <h3>Community</h3>
        <ul>
          <li>
            <a href="#">Guidelines</a>
          </li>
          <li>
            <a href="#">Discussions</a>
          </li>
          <li>
            <a href="#">Leaderboard</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="info-div">
        <h3>LEGAL</h3>
        <ul>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">API Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
