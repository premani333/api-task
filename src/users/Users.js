import * as React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { SET_USERS } from "../actions";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result.data);
      this.props.setUsers(result.data);
      // this.setState({ users: result.data });
    });
  };

  render() {
    return (
      <div className="">
        <table>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>email</th>
            <th>Address</th>
          </tr>
          {(this.props.users || []).map((user) => {
            return (
              <tbody>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.address.street},<br />
                    {user.address.suite},<br />
                    {user.address.city},<br />
                    {user.address.zipcode}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch({ type: SET_USERS, value: users });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
