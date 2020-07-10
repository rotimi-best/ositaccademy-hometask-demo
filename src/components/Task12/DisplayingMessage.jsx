import React from 'react'
import classes from '../GeneralStyles.module.css'

class DisplayingMessage extends React.Component {
    state={
        display: false,
        messageText:''
    }

    displayMessage = () => {
        this.setState({
            display: !this.state.display
        })
    }
    generateAnswer = () => {
        let messageCode = Math.floor(Math.random() * 10);
        let messageText;
        if (messageCode >= 0 && messageCode < 4) {
            messageText = 'Forest'
        } else if(messageCode >= 4 && messageCode < 8) {
            messageText = 'City'
        } else if(messageCode >= 8 && messageCode <= 10) {
            messageText = 'Home'
        }
        this.setState({
            messageText
        })
    }
    render() {
        return(
            <div className={classes.displayMessage}>
                <h2>This is blinked message. Just click button below</h2>
                {this.state.display && <div>
                    <p>You are in <span>{this.state.messageText}</span></p> 
                    <button className={classes.generateButton} onClick={this.generateAnswer}>Click to know where are you</button>
                    </div>}
                <button className={classes.displayButton} onClick={this.displayMessage} >Click to see a message</button>
            </div>
        )
    }
}

export default DisplayingMessage;