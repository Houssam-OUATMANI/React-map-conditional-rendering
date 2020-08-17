import React, { Component, Fragment } from "react";
import { getUsers } from "../database/users";

export default class Users extends Component {
  state = {
    users: getUsers()
  };

  deleteUser = (user) => {
    const users = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users });
  };

  render() {
    if (this.state.users.length === 0) {
      return (
        <h1 className="text text-danger">No users found in the database</h1>
      );
    }
    return (
      <Fragment>
        <h1>
          Total of users :{" "}
          <strong className="text-primary">{this.state.users.length}</strong>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th className="text-primary">ID</th>
              <th className="text-primary">Name</th>
              <th className="text-primary">Age</th>
              <th className="text-primary">Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <th>#{user.id}</th>
                <td>{user.name.toLocaleUpperCase()}</td>
                <td>{user.age}</td>
                <td>{user.job.toLocaleUpperCase()}</td>
                <td>
                  <button
                    onClick={() => this.deleteUser(user)}
                    className="btn btn-warning btn-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
