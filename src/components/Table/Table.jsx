import React, { useState, useEffect } from "react";
import style from "./table.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";

function Table({ displayedRows }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [clicked, setClicked] = useState({
    rank: false,
    name: false,
    price: false,
    marketCap: false,
    vwap: false,
    supply: false,
    volume: false,
    change: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets");
        setCryptoData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatCurrency = (value) => {
    return !isNaN(value) && typeof value === "number"
      ? value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "-";
  };

  const formatNumberOrDash = (value, isCurrency = false) => {
    if (isNaN(value) || typeof value !== "number") {
      return "-";
    }

    if (Math.abs(value) >= 1e12) {
      return (value / 1e12).toFixed(2) + "t";
    } else if (Math.abs(value) >= 1e9) {
      return (value / 1e9).toFixed(2) + "b";
    } else if (Math.abs(value) >= 1e6) {
      return (value / 1e6).toFixed(2) + "m";
    } else if (Math.abs(value) >= 1e3) {
      return (value / 1e3).toFixed(2) + "k";
    } else {
      return isCurrency ? formatCurrency(value) : value.toFixed(2);
    }
  };

  const toggle = (columnName) => {
    setClicked((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };

  return (
    <div className={style.container}>
      <table>
        <thead className={style.thead}>
          <tr className={style.row}>
            <th onClick={() => toggle("rank")}>
              Rank{" "}
              {clicked.rank && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("name")} className={style.name}>
              Name
              {clicked.name && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("price")}>
              Price{" "}
              {clicked.price && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("market")}>
              Market Cap
              {clicked.market && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("vwap")}>
              VWAP (24Hr)
              {clicked.vwap && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("supply")}>
              Supply
              {clicked.supply && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("volume")}>
              Volume (24Hr)
              {clicked.volume && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
            <th onClick={() => toggle("change")}>
              Change (24Hr)
              {clicked.change && (
                <span>
                  &nbsp; <IoMdArrowDropdown />
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.slice(0, displayedRows).map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.rank}</td>
              <td>
                <div className={style.cryptoName}>
                  <img
                    src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
                    alt={crypto.symbol}
                    className={style.currencyIcon}
                  />
                  <div className={style.names}>
                    <div className={style.fullName}> {crypto.name}</div>
                    <div className={style.symbol}>{crypto.symbol}</div>
                  </div>
                </div>
              </td>
              <td>{formatCurrency(parseFloat(crypto.priceUsd))}</td>
              <td>${formatNumberOrDash(parseFloat(crypto.marketCapUsd))}</td>
              <td>{formatCurrency(parseFloat(crypto.vwap24Hr))}</td>
              <td>{formatNumberOrDash(parseFloat(crypto.supply))}</td>
              <td>
                ${formatNumberOrDash(parseFloat(crypto.volumeUsd24Hr), true)}
              </td>
              <td
                className={
                  crypto.changePercent24Hr < 0 ? style.red : style.green
                }
              >
                {formatNumberOrDash(parseFloat(crypto.changePercent24Hr))}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
