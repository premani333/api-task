import React, { Component } from "react";
import Users from "./users/Users";
import { Provider } from "react-redux";
import { getStore } from "./store";

const store = getStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  render() {
    return (
      <Provider store={store}>
        <Users />
      </Provider>
    );
  }
}

export default App;
