import React from "react";
import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import App from "./App";
import ScrollToTop from "./scroll.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ScrollToTop/>
    <App />
  </BrowserRouter>
);