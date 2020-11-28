import React, {Component} from "react";
import DataItem from "./dataItem/dataItem";

export default class Task5 extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                              this.setState({
                    data
                });
            });
    }

    render() {
               return (
            <div>
                <DataItem data={this.state.data}/>
            </div>
        );
    }
}
