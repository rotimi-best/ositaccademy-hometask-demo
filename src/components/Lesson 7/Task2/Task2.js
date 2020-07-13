import React, {Component} from "react";
import './task2.css';


export default class Lesson7Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = { expanded: false };
    }

    onToggleButtonClick() {
        this.setState(state => ({ expanded: !state.expanded }));
    }

    render() {
        console.log(this.state)
        return (
            <div id='task2'>
                <button onClick={this.onToggleButtonClick.bind(this)}></button>
                { this.renderDrawer(this.state.expanded) }
            </div>
        );
    }

    renderDrawer(navClass) {
        return (
            <nav className={navClass?'none':''}>
                <ul>
                    <li><a href="#">Some link</a></li>
                    <li><a href="#">Another link</a></li>
                    <li><a href="#">Just one more link</a></li>
                </ul>
            </nav>
        );
    }
}
