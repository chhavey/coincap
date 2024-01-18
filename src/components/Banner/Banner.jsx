import React from "react";
import style from "../Banner/banner.module.css";

function Banner() {
  return (
    <div className={style.container}>
      <div className={style.col}>
        <span className={style.heading}>MARKET CAP</span>
        <span className={style.subheading}>$1.65T</span>
      </div>
      <div className={style.col}>
        <span className={style.heading}>EXCHANGE VOL</span>
        <span className={style.subheading}>$53.13B</span>
      </div>
      <div className={style.col}>
        <span className={style.heading}>ASSETS</span>
        <span className={style.subheading}>2,296</span>
      </div>
      <div className={style.col}>
        <span className={style.heading}>EXCHANGES</span>
        <span className={style.subheading}>73</span>
      </div>
      <div className={style.col}>
        <span className={style.heading}>MARKETS</span>
        <span className={style.subheading}>8,905</span>
      </div>
      <div className={style.col}>
        <span className={style.heading}>BTC DOM INDEX</span>
        <span className={style.subheading}>50.2%</span>
      </div>
    </div>
  );
}

export default Banner;
