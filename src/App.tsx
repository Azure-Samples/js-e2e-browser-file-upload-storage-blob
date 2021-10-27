// ./src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import Practice from "./Practice.jsx";
import Instructors from "./Instructors.jsx";
import Review from "./Review.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Find from "./Find.jsx";
import "./App.css";
import "./robots.txt";


const brand = { name: "stay-fit, stay-safe", to: "/" };

const App = (): JSX.Element => {
  return (
    <div className="main">
      <h1 className="brand"> Stay Fit, StaySafe</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/find" exact component={() => <Find />} />
          <Route path="/practice" exact component={() => <Practice />} />
          <Route path="/review" exact component={() => <Review />} />
          <Route path="/instructors" exact component={() => <Instructors />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


