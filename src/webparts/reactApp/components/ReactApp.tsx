import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import { Header } from "./Header/Header";
import { Product } from "./Product";
import { Search } from "./Search/Search";

const ReactApp = () => {
  return (
    <Router>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12">
            <Header />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12">
            <Search />
          </div>
        </div>

        {/* The different screens will be re-rendered here */}

        <Route path="/screen1" component={Screen1} />
        <Route path="/screen2" component={Screen2} />
        <Route path="/products/:id" component={Product} />

        <div>Footer</div>
      </div>
    </Router>
  );
};

export default ReactApp;
