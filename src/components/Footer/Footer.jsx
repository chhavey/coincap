import React from "react";
import style from "./footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import googleplay from "../../assets/googleplay.webp";
import appstore from "../../assets/appstore.webp";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        COINCAP.IO
        <ul>
          <li>Methodology</li>
          <li>Support</li>
          <li>Our API</li>
          <li>Rate Comparision</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className={style.block1}>
        LEGALS
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
        DISCLAIMER
        <p>
          Neither ShapeShift AG nor CoinCap are in <br /> any way associated
          with CoinMarketCap, <br /> LLC or any of its goods and services.
        </p>
      </div>
      <div className={style.block1}>
        FOLLOW US
        <div className={style.icons}>
          <span>
            <FaTwitter />
          </span>
          <span>
            <AiFillFacebook />
          </span>
        </div>
      </div>
      <div className={style.block1}>
        COINCAP APP AVAILABLE ON
        <div className={style.badges}>
          <img src={googleplay} alt="get it on google play" />
          <img src={appstore} alt="download it on app store" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
