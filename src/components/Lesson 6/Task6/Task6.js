import React, {Component} from "react";

export default class Task6 extends Component {


    componentDidMount() {
        // throw new Error("Error");
        fetch('https://cors-anywhere.herokuapp.com/https://github.com/kkmkkkkk')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({data});
            })


    }


    render() {

        return (
            <div>
                Task 6
            </div>
        );
    }
}
