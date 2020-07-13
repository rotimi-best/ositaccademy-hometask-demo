import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default class Lesson7Task1 extends Component {

    state = {
        loggedIn: false
    };

    onClick = () => {
        this.setState(prevstate => ({loggedIn: !prevstate.loggedIn}));
    };


    render() {
        const {loggedIn} = this.state;
        return (
            <Box display='flex' justifyContent='center' p={8}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={loggedIn?<LockOutlinedIcon/>:<LockOpenOutlinedIcon/>}
                    onClick={this.onClick}
                >
                    {loggedIn?'Logout':'Login'}
                </Button>

            </Box>
        );
    }
}
