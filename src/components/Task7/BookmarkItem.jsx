import React from 'react';
import classes from './Bookmarker.module.css'

// = ({siteName, siteURL, id, deleteItem}) =>

class BookmarkItem extends React.Component {


    deleteItem = () => {
        let itemId = this.props._id

        let request = new XMLHttpRequest();
        let bookmarkURL = `https://rotimi-best-cargo-transportation-api.glitch.me//bookmark/2/${itemId}`
        request.open('DELETE', bookmarkURL);
        request.send();

        request.onload = function () {


            if (request.status !== 200) {
                alert(`Ошибка ${request.status}: ${request.statusText}`);
            } else {
                console.log(request.status)
                console.log(request.response)
                this.props.getBookmarks()
            }
        }.bind(this);

        request.onerror = function () {
            alert("Запрос не удался");
        };
        
    }

    openEditMode = () => {
        let title = this.props.title;
        let url = this.props.url;
        let bookmarkId = this.props._id;
        this.props.setInputData(title, url)
        this.props.setEditModeData(true)
        this.props.setUpdatedBookmarkId(bookmarkId)
    }
    render() {
        return (
            <li className={classes.bookmark}>
                <span>{this.props.title}</span>
                <button onClick={this.openEditMode} className={`${classes.btn} ${classes.btnDefault}`}>Open</button>
                <a className={`${classes.btn} ${classes.btnDefault}`} href={this.props.url} target="_blank" >Visit</a>
                <button onClick={this.deleteItem} className={`${classes.btn} ${classes.btnDanger}`}>Delete</button>

            </li>
        )
    }
}

export default BookmarkItem;