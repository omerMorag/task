/* eslint-disable jsx-a11y/img-redundant-alt */
import { userService } from "../services/user.service.js";
import React from "react";
import { UserMap } from "../cmps/UserMap.jsx";

export class UserDetails extends React.Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userName = urlParams.get("username");
    const user = await userService.getUserByUserName(userName);
    this.setState({ user });
  }

  render() {
    
    const { user } = this.state;
    if (!user) return <div className="lodaing">loading...</div>;
    return (
      <div className="User-Details-Body">
        <h1>User Details</h1>
        <section className="card">
          <span className="pic-details-container">
            <img src={user.picture.large} alt="user-picture" />
          </span>
          <div className="rightSide">
            <p className="name-details">
              {user.name.first.charAt(0)}.{user.name.last}
            </p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <p>{user.gender}</p>
            <p>{user.dob.age}</p>
          </div>
        </section>
        <UserMap location={user.location.coordinates}></UserMap>
      </div>
    );
  }
}
