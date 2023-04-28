import React from "react";
import ReactDOMClient from "react-dom/client";
import "./styling/index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./app/Store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
