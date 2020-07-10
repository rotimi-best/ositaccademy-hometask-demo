import React from 'react'
import classes from '../GeneralStyles.module.css'

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  onToggleButtonClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    return (
      <div className={classes.burger_menu}>
        <div className={classes.container}>
          <h2>Ninth task to create Burger Menu</h2>
        </div>
        <button onClick={this.onToggleButtonClick.bind(this)}></button>
        {this.state.expanded ? this.renderDrawer() : null}
      </div>
    );
  }

  renderDrawer() {
    return (
      <nav>
        <ul>
          <li><a href="#">Some link</a></li>
          <li><a href="#">Another link</a></li>
          <li><a href="#">Just one more link</a></li>
        </ul>
      </nav>
    );
  }
}


export default BurgerMenu;