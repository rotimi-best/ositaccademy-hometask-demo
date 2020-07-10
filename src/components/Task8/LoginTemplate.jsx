import React from 'react'
import lock from '../../assets/image/lock.png'
import unlock from '../../assets/image/unlock.png'
import classes from '../GeneralStyles.module.css'


class LoginTemplate extends React.Component {
    state = {
        isLogged: false
    }


    changeLogin = () => {
        this.setState({
            isLogged: !this.state.isLogged
        })
    }


    render() {
        return (
            <div className={classes.login}>
                <div className={classes.container}>
                    <h2>Eight task to create Login button</h2>
                </div>
                {this.state.isLogged ?
                    <p>You are logged in</p> :
                    <p>You are not logged in</p>}
                {this.state.isLogged ?
                    <button onClick={this.changeLogin} >Login<span className={classes.login_image}><img src={lock} alt="" /></span></button> :
                    <button onClick={this.changeLogin} >Logout<span className={classes.login_image}><img src={unlock} alt="" /></span></button>}
            </div>
        )
    }
}

export default LoginTemplate;