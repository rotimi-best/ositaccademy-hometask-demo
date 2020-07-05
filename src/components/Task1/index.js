import React, {Component} from "react";

export default class Task1 extends Component {
    state = {
        list: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9'],
        randomName: ''
    };

    getRandomName = () => {
        const {list} = this.state;
        this.setState({
            randomName: list[Math.floor(Math.random() * list.length)]
        });

    };

    render() {
        const {randomName} = this.state;
        return (
            <div>
                <h1>{randomName}</h1>
                <button onClick={this.getRandomName}>Get Random Name</button>
            </div>
        );
    }
}

