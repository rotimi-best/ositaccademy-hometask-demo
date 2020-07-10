import React from 'react'
import classes from '../GeneralStyles.module.css'

class ReportCard extends React.Component {
    state={
        scope: 0
    }

    increaseScope = () => {
        let scopeValue = this.state.scope
        if(scopeValue >= 0 && scopeValue < 10) {
            this.setState({
                scope: scopeValue + 1
            })
        } else {
            this.setState({
                scope: 0
            })
        }

    }

    render() {
        return(
            <div className={classes.ReportCard}>
                <h2>Clicking task. Just click and enjoy!!!</h2>
                <div>{this.state.scope}</div>
                <div>
                    {this.state.scope > 0 && this.state.scope <=4 && <p>Your result is poor</p>}
                    {this.state.scope >4 && this.state.scope <=7 &&<p>Your result is average</p>}
                    {this.state.scope > 7 && this.state.scope <=10 && <p>Your result is excellent</p>}

                </div>
                
                <div>
                    <button onClick={this.increaseScope}>Click me</button>
                </div>

            </div>
        )
    }
}

export default ReportCard;