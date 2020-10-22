import React, { Component } from "react";
import Posts from "./posts/Posts";
import { Provider } from "react-redux";
import { getStore } from "./store";

const store = getStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  render() {
    return (
      <Provider store={store}>
        <Posts />
      </Provider>
    );
  }
}

export default App;
