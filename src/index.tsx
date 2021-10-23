import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


export { default as Navigation } from "./Navigation.jsx";
export { default as Footer } from "./Footer.jsx";
export { default as Home } from "./Home.jsx";
export { default as Practice } from "./Practice.jsx";
export { default as Instructors } from "./Instructors.jsx";
export { default as Review } from "./Review.jsx";
