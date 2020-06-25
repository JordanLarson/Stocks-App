import React from "react";
import stocks from "./stock-data";
import { Link } from "react-router-dom";

function currentStocks(props) {
  console.log(props);
  let myStocks = stocks.map((element, index) => {
    return (
      <div key={element.symbol}>
        <p className="stockslist">
          <Link to={"/Stock/" + element.symbol}>{element.name}</Link>
        </p>
      </div>
    );
  });
  return (
    <>
      <div> {myStocks} </div>
    </>
  );
}
export default currentStocks;
