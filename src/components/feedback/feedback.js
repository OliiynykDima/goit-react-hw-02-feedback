import React, { Component } from "react";
import ReactDOM from "react-dom";

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    };

    this.goodUp = this.goodUp.bind(this);
    this.neutralUp = this.neutralUp.bind(this);
    this.badUp = this.badUp.bind(this);
  }
  goodUp() {
    this.setState((state) => {
      return{
        good: state.good + 1,
      }
    });

    this.total();
    this.countPositiveFeedbackPercentage();
  }

  neutralUp() {
    this.setState((state) => {
      return{
        neutral: state.neutral + 1,
      }
    });

    console.log(this.state.neutral);
    this.total();
    this.countPositiveFeedbackPercentage();
  }

  badUp() {
    this.setState({
      bad: this.state.bad + 1,
    });

    this.total();
    this.countPositiveFeedbackPercentage();
  }

  total() {
    this.setState({
      total: this.state.bad + this.state.good + this.state.neutral + 1,
    });
    console.log(this.state);
    console.log(`Total: ${this.state.total} `); // 0
  }
  countPositiveFeedbackPercentage() {
    this.setState((state) => {
      return{
        positive: ((state.good / (state.bad + state.good + state.neutral)) * 100).toFixed(0) + "%",
      }
    });
    console.log(this.state);
    console.log(`Pos: ${this.state.positive} `); // 0
  }
  stats() {
    if (
      this.state.bad != 0 ||
      this.state.good != 0 ||
      this.state.neutral != 0
    ) {
      return (
        <div id="statistics">
          <h2 id="title">Statistics</h2>
          <ul id="stats">
            <li id="stat">Good: {this.state.good}</li>
            <li id="stat">Neutral: {this.state.neutral}</li>
            <li id="stat">Bad: {this.state.bad}</li>
            <li id="stat">Total: {this.state.total}</li>
            <li id="stat">Positive feedback: {this.state.positive}</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div id="statistics">
          <h2 id="title">No feedback given</h2>
        </div>
      );
    }
  }
  render() {
    return (
      <div id="wrapper">
        <div id="leaveFead">
          <button type="button" id="good" onClick={this.goodUp}>
            Good
          </button>
          <button type="button" id="neutral" onClick={this.neutralUp}>
            Neutral
          </button>
          <button type="button" id="bad" onClick={this.badUp}>
            Bad
          </button>
        </div>
        <div id="statsWrapper">{this.stats()}</div>
      </div>
    );
  }
}

export default Feedback;
