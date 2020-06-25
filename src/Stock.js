import React from "react";
import stocks from "./stock-data";

function Stock(props) {
  console.log(props);
  const stockSymbol = stocks.symbol;
  props.handleClick(stockSymbol);
  let index = stocks
    .map((e) => {
      return e.symbol;
    })
    .indexOf(props.match.params.symbol);
  const stockPrice = stocks[index].lastPrice;
  props.handlePrice(stockPrice);
  return (
    <>
      <div>
        {" "}
        <p> company: {props.match.params.symbol} </p>{" "}
        <p> price: {props.lastPrice} </p>
      </div>
    </>
  );
}
export default Stock;
