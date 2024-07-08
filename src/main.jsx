import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import { Store } from "./app/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={Store}>
      <App />
    </Provider>
  </ThemeProvider>
);
