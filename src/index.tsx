import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import currentList from "./reducers/currentList";
import { combineReducers, createStore } from "redux";
import availableList from "./reducers/availableList";
import "./style/style.css";

const store = createStore(combineReducers({ currentList, availableList }));
store.subscribe(() => console.log("hi store", store.getState()));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
