import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeightAndWeight from './HeightAndWeight';
import Bmi from './Bmi';
import Healthy from './Healthy';

class App extends Component {
  constructor() {
    super();

    this.calculate = this.calculate.bind(this);
    this.check = this.check.bind(this);
    //initial state
    this.state = {
      BMI: 2,
      height: 0,
      weight: 0,
      Healthy: " "
    }
  }

  calculate(BMI) {
    const bmi = (2 * 2);
    this.setState({ BMI: BMI});
    console.log('test');
  }

  check(BMI) {
    console.log(Healthy);
    let Healthy = "";
    if (BMI <= 18.5) {
      this.setState({Healthy: "Underweight"})
    } else if (BMI > 18.5 && BMI <= 25) {
      this.setState({Healthy: "Normal Weight"})
    } else if (BMI > 25 && BMI <= 30) {
        this.setState({Healthy: "Overweight"})
    } else if (BMI > 30) {
        this.setState({Healthy: "Obese"})
    } else {
        this.setState({Healthy: "Something went wrong"})
    }

  }



  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>BMI Calculator</h1>
        </div>
        <div className="content-box">
          <HeightAndWeight calculate={this.calculate} check={this.check}/>
          <Bmi
          BMI={this.state.BMI}/>
          <Healthy Healthy={this.state.Healthy}/>
        </div>
      </div>
    );
  }
}

export default App;
