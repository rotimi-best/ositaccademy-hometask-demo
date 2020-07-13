import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class Task6 extends Component {
    state = {
        score: 0,
        message: ''
    };

    changeScore = () => {
        this.setState(state => ({
            score: state.score === 10 ? 0 : state.score + 1
        }));

        this.setState(state => ({
            message: this.getMsg(state.score)
        }));

    };
    getMsg = (score) => {
        return 1 <= score && score <= 4
            ? 'Your result is poor'
            : 5 <= score && score <= 7
                ? 'Your result is average'
                : 8 <= score && score <= 10
                    ? 'Your result is excellent'
                    : ''
    };

    render() {

        return (
            <Box align='center'>
                <Typography variant='h3'>{this.state.score}</Typography>
                <Button onClick={this.changeScore}>Change Score</Button>
                <Typography variant='h4'>{this.state.message}</Typography>

            </Box>
        );
    }
}
