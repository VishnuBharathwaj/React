import React, { Component } from "react";
import "./task2.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      currentInput: "",
      operator: "",
      prevValue: null,
    };
  }

  handleDigitClick = (digit) => {
    this.setState((prevState) => {
      const currentInput = prevState.currentInput + digit;
      return {
        display: currentInput,
        currentInput: currentInput,
      };
    });
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => {
      const prevValue = parseFloat(prevState.currentInput);
      return {
        operator: operator,
        prevValue: prevValue,
        currentInput: "",
      };
    });
  };

  handleEqualsClick = () => {
    this.setState((prevState) => {
      const currentValue = parseFloat(prevState.currentInput);
      let result;

      switch (prevState.operator) {
        case "+":
          result = prevState.prevValue + currentValue;
          break;
        case "-":
          result = prevState.prevValue - currentValue;
          break;
        case "*":
          result = prevState.prevValue * currentValue;
          break;
        case "/":
          result = prevState.prevValue / currentValue;
          break;
        default:
          result = currentValue;
      }

      return {
        display: result.toString(),
        currentInput: result.toString(),
        operator: "",
        prevValue: null,
      };
    });
  };

  handleClearClick = () => {
    this.setState({
      display: "0",
      currentInput: "",
      operator: "",
      prevValue: null,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleDigitClick("7")}>7</button>
            <button onClick={() => this.handleDigitClick("8")}>8</button>
            <button onClick={() => this.handleDigitClick("9")}>9</button>
            <button onClick={() => this.handleOperatorClick("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleDigitClick("4")}>4</button>
            <button onClick={() => this.handleDigitClick("5")}>5</button>
            <button onClick={() => this.handleDigitClick("6")}>6</button>
            <button onClick={() => this.handleOperatorClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleDigitClick("1")}>1</button>
            <button onClick={() => this.handleDigitClick("2")}>2</button>
            <button onClick={() => this.handleDigitClick("3")}>3</button>
            <button onClick={() => this.handleOperatorClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleClearClick()}>C</button>
            <button onClick={() => this.handleDigitClick("0")}>0</button>
            <button onClick={() => this.handleEqualsClick()}>=</button>
            <button onClick={() => this.handleOperatorClick("/")}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
