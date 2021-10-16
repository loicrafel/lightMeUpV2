import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// dev tools

import { getPosts } from "./actions/post.actions";
import { getUsers } from "./actions/users.actions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
