import React, { Component } from "react";
import "./task4.css";
class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    // Fetch data from the API
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.users }); // Assuming data is an object with a "users" property
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="component">
        <h2>
          <center>User Data</center>
        </h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Task4;
