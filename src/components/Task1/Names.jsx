import React from 'react'
import classes from '../GeneralStyles.module.css';

class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sergey"},
        {id: 5, name: "Vova"},
        {id: 6, name: "Petya"},
      ],
      userId: 0
    }

  }
  changeName = () => {

    let userIdGenerator = () => Math.floor(Math.random() * 10);
    let userId = userIdGenerator();

    if (userId <= this.state.names.length - 1 ) {
      this.setState({
        userId: userId
      })
    } else {
      this.changeName()
    }
    
  }

  render() {
    return (
      <div className={classes.container}>
          <h2>First task with Names</h2>
          <h3>{this.state.names[this.state.userId].name}</h3>
          <button onClick={this.changeName}>Change name</button>
      </div>
    )
  }
}

export default Names;