/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export class UserRow extends React.Component {

 moveToUserDetails=()=>{
    const {user}=this.props;
window.location.href=`/task/user/?username=${user.login.username}`
    }

    render(){
        const {user}=this.props;
        return (
            <tr onClick={this.moveToUserDetails}>
              <td>
                  <span className="user-pic-container">
                  <img src={user.picture.medium} alt="user-picture" />
                  </span>
              </td>
              <td>{user.name.first.charAt(0)}.{user.name.last}</td>
              <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
              <td>{user.gender}</td>
              <td>{user.dob.age}</td>
            </tr>
          );
    }
  }
  