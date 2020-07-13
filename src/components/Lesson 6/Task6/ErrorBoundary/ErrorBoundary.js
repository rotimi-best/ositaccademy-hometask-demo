import React, {Component} from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }


    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    errorMsg = () => {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Ups... </h1>
                <h2 style={{textAlign: 'center'}}>Something wrong! We already fix it.</h2>
            </div>
        )
    };

    render() {
        // console.log('Error', this.state.hasError);
        return this.state.hasError ? this.errorMsg() : this.props.children;


    }
}