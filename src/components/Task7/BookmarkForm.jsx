import React from 'react';
import classes from './Bookmarker.module.css'
import BookmarkInput from './BookmarkInput'

class BookmarkForm extends React.Component {
    state={
        siteName: '',
        siteURL: '',
        inputNameText:'',
        inputUrlText: ''
    }

    onTextChange = (inputText, inputId) => {
        switch (inputId) {
            case 'siteName':
            this.setState({
                inputNameText: inputText
            })
            break;

            case 'siteURL':
                this.setState({
                    inputUrlText: inputText
                })
                break;

            default: 
            return null
        }
    }

    onInputBlur = (inputId) => {
        switch (inputId) {
                    case 'siteName':
                    this.setState({
                        siteName: this.state.inputNameText
                    })
                    break;
        
                    case 'siteURL':
                        this.setState({
                            siteURL: this.state.inputUrlText
                        })
                        break;
        
                    default: 
                    return null
                }
    }

    validateForm = (siteName, siteUrl) => {
        if (!siteName || !siteUrl) {
            alert('Please fill the form');
            return false;
        }
    
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
    
        if (!siteUrl.match(regex)) {
            alert('Please use a valid url');
            return false;
        }
    
        this.props.getFormData(siteName, siteUrl)
        this.setState({
            inputNameText: '',
            inputUrlText: ''
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        let siteName = this.state.siteName;
        let siteURL = this.state.siteURL;
        this.validateForm(siteName, siteURL)

    }


    render() {
        return <form onSubmit={this.onFormSubmit}>
        <BookmarkInput 
        inputText={this.state.inputNameText}
        onTextChange={this.onTextChange} 
        onInputBlur={this.onInputBlur}
        name='Site Name' 
        id='siteName' />


        <BookmarkInput 
        inputText={this.state.inputUrlText}
        onTextChange={this.onTextChange} 
        onInputBlur={this.onInputBlur}
        name='Site URL' 
        id='siteURL' />

        <button className={`${classes.btn} ${classes.btnPrimary}`} >Submit</button>
    </form>
    }


   
}

export default BookmarkForm;
