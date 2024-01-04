import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import todoStore from "./store/todoStore";

export const StoreContext = React.createContext({ todoStore });

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={{ todoStore }}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
