import React from 'react';
import classes from './Bookmarker.module.css'
import BookmarkInput from './BookmarkInput'

class BookmarkForm extends React.Component {


    onTextChange = (inputText, inputId) => {

        this.props.onTextChange(inputText, inputId)
    }

    onInputBlur = (inputId) => {
        
        this.props.onInputBlur(inputId)
    }
    



    onFormSubmit = (e) => {
        e.preventDefault()
        let siteName = this.props.siteName;
        let siteURL = this.props.siteURL;
        this.validateForm(siteName, siteURL)
        
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
        this.props.isEditModeActive ? this.updateBookmark(siteName, siteUrl) : this.setBookmark(siteName, siteUrl)
        
        this.props.setInputData()
    }

    setBookmark = (title, url) => {
        let request = new XMLHttpRequest();
        let bookmarkURL = `https://rotimi-best-cargo-transportation-api.glitch.me//bookmark/2`
        request.open('POST', bookmarkURL);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let bookmarkData = JSON.stringify({
            title,
            url
        })
        request.send(bookmarkData);

        request.onload = function () {
            if (request.status !== 200) {
                alert(`Ошибка ${request.status}: ${request.statusText}`);
            } else {
                this.props.getBookmarks()
            }
        }.bind(this);

        request.onerror = function () {
            alert("Запрос не удался");
        };
    }

    updateBookmark = (title, url) => {
        let bookmarkId = this.props.updatedBookmarkId
        let request = new XMLHttpRequest();
        let bookmarkURL = `https://rotimi-best-cargo-transportation-api.glitch.me//bookmark/2/${bookmarkId}`
        request.open('PUT', bookmarkURL);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let bookmarkData = JSON.stringify({
            title,
            url
        })
        request.send(bookmarkData);

        request.onload = function () {
            if (request.status !== 200) {
                alert(`Ошибка ${request.status}: ${request.statusText}`);
            } else {
                this.props.setEditModeData(false)
                this.props.getBookmarks()
            }
        }.bind(this);

        request.onerror = function () {
            alert("Запрос не удался");
        };
    }


    render() {
        return <form onSubmit={this.onFormSubmit}>
            <BookmarkInput
                inputText={this.props.inputNameText}
                onTextChange={this.onTextChange}
                onInputBlur={this.onInputBlur}
                name='Site Name'
                id='siteName' />


            <BookmarkInput
                inputText={this.props.inputUrlText}
                onTextChange={this.onTextChange}
                onInputBlur={this.onInputBlur}
                name='Site URL'
                id='siteURL' />
            {this.props.isEditModeActive ? <button className={`${classes.btn} ${classes.btnPrimary}`} >Update bookmark</button> : 
            <button className={`${classes.btn} ${classes.btnPrimary}`} >Submit</button> }
        </form>
    }



}

export default BookmarkForm;
