import React, { Component } from "react";
import Link from "next/link";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Click the links</h1>
        <h3>
          <Link href="/users">Users ></Link>
        </h3>
        <h3>
          <Link href="/posts">Posts ></Link>
        </h3>
      </div>
    );
  }
}
export default Home;
