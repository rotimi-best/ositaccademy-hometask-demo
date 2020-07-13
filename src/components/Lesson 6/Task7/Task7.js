import React, {Component} from "react";

export default class Task7 extends Component {
    state = {
        data: [],
        currentImg: {},
        currentIdx: null
    };

    componentDidMount() {
        fetch('https://picsum.photos/v2/list?limit=10')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    data,
                    currentImg: data[0],
                    currentIdx: 0
                });
            })
            .catch((error) => {
                this.setState({error: true});
            })
    }

    getNextImg = () => {
        this.setState((prevState) => ({
            currentImg: this.state.data[prevState.currentIdx < prevState.data.length - 1 ? prevState.currentIdx + 1 : 0],
            currentIdx: prevState.currentIdx < prevState.data.length - 1 ? prevState.currentIdx + 1 : 0
        }))
    };
    getPrevImg = () => {
        this.setState((prevState) => ({
            currentImg: this.state.data[prevState.currentIdx > 0 ? prevState.currentIdx - 1 : prevState.data.length - 1],
            currentIdx: prevState.currentIdx > 0 ? prevState.currentIdx - 1 : prevState.data.length - 1
        }))
    };


    render() {
        const {currentImg} = this.state;
        return (
            <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={this.getPrevImg}>prev</button>
                <div style={{margin: '0 30px'}}>
                    <img src={currentImg.download_url} alt={currentImg.author} width='400px'/>
                    <hr/>
                    <h3 style={{textAlign: 'center'}}>{currentImg.author}</h3>
                </div>
                <button onClick={this.getNextImg}>next</button>
            </div>
        );
    }
}
