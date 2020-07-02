import React from 'react'
import classes from '../GeneralStyles.module.css';
import WarningMinMax from './WarningMinMax'
import WarningOdd from './WarningOdd'
import WarningNegative from './WarningNegative'

class Generator extends React.Component {
  state = {
    min: 0,
    max: 10,
    generatedNumber: 0,
    MinMoreMax: false,
    isOdd: false,
    isOddFigure: 0,
    isMinNegative: false,
    isMaxNegative: false
  }

  setMinNumber = (e) => {
    if(e.target.value < 0) {
      this.setState({
        isMinNegative: true
      })
    } else {
      this.setState({
        min: e.target.value,
        isMinNegative: false,
      })
    }

  }
  setMaxNumber = (e) => {
    if(e.target.value < 0) {
      this.setState({
        isMaxNegative: true
      })
    } else {
      this.setState({
        max: e.target.value,
        isMaxNegative: false,
      })
    }
 }
  generateANumber = () => {
    const { min, max } = this.state
    if (min >= max) {
      this.setState({
        MinMoreMax: true
      })
    } else {
      this.setState({
        MinMoreMax: false
      })
      let generator = () => Math.floor(Math.random() * Math.pow(10, max.toString().length))
      let number = generator();
      if (number >= min && number<= max) {
        if(number%2 === 0) {
          this.setState({
            generatedNumber: number,
            isOdd: false,

          })
        }else {
          this.setState({
            isOddFigure: number,
            isOdd: true,

          })
        }
      } else {
        this.generateANumber()
      }

    }


  }
  render() {
    // let max = 3
    // let num = Math.floor(Math.random() * Math.pow(10, max.toString().length))
    // console.log(num)
    return (
      <div className={classes.container}>
        <h2>Trird task to create Generator</h2>
        <div >
          <div className={classes.generator_input}>
            <label >
              Enter a <span>Minimun</span> value
              {
                
                this.state.isMinNegative ? <div>
                <input onChange={this.setMinNumber} type="number" /> <WarningNegative /> </div> :
                <input onChange={this.setMinNumber} type="number" />
              }
            </label>
          </div>


          <div className={classes.generator}>
            <div>{this.state.min}</div>

            {
              this.state.MinMoreMax ? 
              <div className={classes.generator_figure}>  {this.state.generatedNumber} <WarningMinMax /> </div> :
              this.state.isOdd ? 
              <div className={classes.generator_figure}>  {this.state.generatedNumber} <WarningOdd number={this.state.isOddFigure} /> </div> :
              <div className={classes.generator_figure}> {this.state.generatedNumber}</div>
            }
            
            <div>{this.state.max}</div>
            <button onClick={this.generateANumber} className={classes.generator_button}>Press to generate</button>
          </div>


          <div className={classes.generator_input}>
            <label >
              Enter a <span>Maximum</span> value
              {
                this.state.isMaxNegative ? <div>
                <input onChange={this.setMaxNumber} type="number" /> <WarningNegative /> </div> :
                <input onChange={this.setMaxNumber} type="number" />
              }
              
            </label>

          </div>

        </div>
      </div>
    )
  }
}

export default Generator;