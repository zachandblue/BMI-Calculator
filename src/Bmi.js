import React from 'react';

class Bmi extends React.Component {
  render() {
    return(
      <div>
        <h2>Body Mass Index: {this.props.BMI}</h2>
      </div>
    )
  }
}

export default Bmi;
