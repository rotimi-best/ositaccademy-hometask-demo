import React from 'react';
import classes from './Bookmarker.module.css'

class BookmarkInput extends React.Component {

    onInputBlur = () => {
        let inputId = this.props.id
        this.props.onInputBlur(inputId)
    }


    onInputTextChange = (e) =>{
        let inputText = e.target.value
        let inputId = this.props.id
        this.props.onTextChange(inputText, inputId)
    }


    render() {
        return (
            <div className={classes.formGroup}>
                <label htmlFor={this.props.id} >{this.props.name}</label>
                <input 
                onChange={this.onInputTextChange} 
                onBlur={this.onInputBlur} 
                name={this.props.id} 
                type="text" 
                className={classes.formControl} 
                id={this.props.id} 
                placeholder={this.props.name}
                value={this.props.inputText} />
            </div>
        )
    }

}

export default BookmarkInput;
