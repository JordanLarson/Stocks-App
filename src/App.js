import React, { useState } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import stocks from "./stocks";
import Stock from "./Stock";

function App() {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState(0);

  const handleClick = (abbreviation) => {
    setSymbol(abbreviation);
  };
  const handlePrice = (newPrice) => {
    setPrice(newPrice);
  };
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h3>iStocks</h3>
        </Link>
        <Link to="/stocks"> Stocks </Link>
        <Link to="/about"> About </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/stocks" component={stocks} />

          <Route
            path="/stock/:currency"
            render={(routerProps) => (
              <Stock
                routerProps={routerProps}
                price={price}
                handleClick={handleClick}
              />
            )}
          />
          <Route path="/stock/:symbol" />
          <Stock
            symbol={symbol}
            price={price}
            handleClick={handleClick}
            handlePrice={handlePrice}
          />
        </Switch>
      </main>
    </div>
  );
}
export default App;
