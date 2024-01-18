import React, { useState } from "react";
import style from "./landing.module.css";
import Banner from "../Banner/Banner";
import Table from "../Table/Table";

function Landing() {
  const [displayedRows, setDisplayedRows] = useState(50);

  const handleShowMoreRows = () => {
    setDisplayedRows((prevDisplayedRows) => prevDisplayedRows + 50);
  };
  return (
    <div className={style.landing}>
      <div className={style.banner}>
        <Banner />
      </div>
      <div className={style.table}>
        <Table displayedRows={displayedRows} />
      </div>
      <div className={style.loadBtn} onClick={handleShowMoreRows}>
        View More
      </div>
    </div>
  );
}

export default Landing;
