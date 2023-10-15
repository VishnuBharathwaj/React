import React, { Component } from "react";
import "./task5.css";

class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: "",
      age: null,
    };
  }

  handleBirthdateChange = (e) => {
    this.setState({ birthdate: e.target.value });
  };

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    );
    this.setState({ age: ageInYears });
  };

  render() {
    return (
      <div className="age-calculator">
        <h2>Age Calculator</h2>
        <label className="birthdate-label">
          Enter your birthdate:
          <input
            type="date"
            value={this.state.birthdate}
            onChange={this.handleBirthdateChange}
          />
        </label>
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>
            Your age is <span className="age">{this.state.age}</span> years.
          </p>
        )}
      </div>
    );
  }
}

export default Task5;
