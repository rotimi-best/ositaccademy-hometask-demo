import React, {Component} from "react";

export default class Task4 extends Component {
    state = {
        randomNumber: null
    };
    getRandomNumber = () => {
        const min = parseInt(this.props.min);
        const max = parseInt(this.props.max);
        this.setState({
            randomNumber: this.randomNumber(min, max)
        })
    };

    randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    render() {
        const {randomNumber} = this.state;
        return (
            <div>
                <h1>
                    {randomNumber % 2 === 0 && randomNumber !== null ?
                    this.getRandomNumber() :
                    randomNumber}
                </h1>
                <button onClick={this.getRandomNumber}>Get Random Number</button>
            </div>
        );
    }
}
