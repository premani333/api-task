import * as React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { SET_USERS } from "../actions";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result.data);
      this.props.setUsers(result.data);
      // this.setState({ users: result.data });
    });
  };

  render() {
    return (
      <div className="">
        {(this.props.posts || []).map((post) => {
          return (
            <div className="card">
              <h3>{post.title}</h3>
              <div>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (posts) => {
      dispatch({ type: SET_USERS, value: posts });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
