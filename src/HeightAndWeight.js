import React from 'react';

class HeightAndWeight extends React.Component {
  constructor(){
    super();
    this.submitInfo = this.submitInfo.bind(this);
  }

  submitInfo(event) {
    event.preventDefault();
    console.log('submit')
    const height = this.height.value;
    const weight = this.weight.value;
    let healthy = '';
    const BMI = Math.round((weight * 0.45) / (Math.pow(height * 0.025, 2)) * 10) / 10;
    
    this.props.calculate(BMI);
    this.props.check(BMI);
    this.bmiForm.reset();

  }

  render() {
    return(
      <div>
        <form className="form-group" ref={(input) => this.bmiForm = input} onSubmit= {(e) => this.submitInfo(e)}>
          <div className="box">
            <div className="box-item left-item">
              <h5 className="">Height (in)</h5>
            </div>
            <input className="form-group box-item right-item" type="text" ref={(input) => this.height = input} >
            </input>
          </div>

          <div className="box">
            <div className="box-item left-item">
              <h5 className="">Weight (lbs)</h5>
            </div>
            <input className="form-group box-item right-item" type="text" ref={(input) => this.weight = input} >
            </input>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default HeightAndWeight;
