import React, {Component} from "react";


export default class AddItem extends Component {
    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const {label} = this.state;
        if (label !== '') {
            this.props.addItem(label);
            this.setState({
                label: ''
            })
        }
    };

    render() {
        const addItemText = 'Add new item';
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       placeholder={addItemText}
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
                <div>
                    <button type="submit">
                        Add Item
                    </button>
                </div>
            </form>

        )

    }

}