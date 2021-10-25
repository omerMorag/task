/* eslint-disable no-undef */
import { userService } from "../services/user.service.js";
import { UserRow } from "../cmps/UserRow.jsx";
import React from "react";

export class Users extends React.Component {
  state = {
    users: null,
    page: 1,
    sortBy: null,
  };

  async componentDidMount() {
    const { sortBy: filterBy } = this.state;
    const users = await userService.query(1, filterBy);
    this.setState({ users });
  }

  movePage = async (direction) => {
    var index = this.state.page;
    if (direction) index++;
    else index--;

    if (index > this.state.users.length || index < 1) {
      this.setState({ page: 1 });
      index = 1;
    }
    const users = await userService.query(index, null);
    this.setState({ users: users, page: index });
  };

  setFilter = async (type) => {
    this.setState({ sortBy: type });
    const { page } = this.state;
    console.log("indexz", page);
    const users = await userService.query(page, type);
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    if (!users) return <div className="lodaing">loading...</div>;
    return (
      <div className="body-container">
        <h1>All Users</h1>
        <div className="table-container">
          <table className="users">
            <thead>
              <tr>
                <th>Picture</th>
                <th>
                  Full Name{" "}
                  <span
                    className="filter"
                    onClick={() => this.setFilter("name")}
                  >
                    <i title=" sort by name" className="fas fa-filter"></i>
                  </span>
                </th>
                <th>
                  Email{" "}
                  <span
                    className="filter"
                    onClick={() => this.setFilter("mail")}
                  >
                    <i title=" sort by email" className="fas fa-filter"></i>
                  </span>{" "}
                </th>
                <th>
                  Gender{" "}
                  <span
                    className="filter"
                    onClick={() => this.setFilter("gender")}
                  >
                    <i title=" sort by gender" className="fas fa-filter"></i>
                  </span>
                </th>
                <th>
                  Age{" "}
                  <span
                    className="filter"
                    onClick={() => this.setFilter("age")}
                  >
                    <i title=" sort by age" className="fas fa-filter"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <UserRow user={user} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="pageination">
          <button
            className="fas fa-arrow-left"
            onClick={() => this.movePage(0)}
          ></button>
          {this.state.page}
          <button
            className="fas fa-arrow-right"
            onClick={() => this.movePage(1)}
          ></button>
        </div>
      </div>
    );
  }
}
