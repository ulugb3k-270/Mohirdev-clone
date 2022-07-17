import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
