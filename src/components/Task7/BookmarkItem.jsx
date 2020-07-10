import React from 'react';
import classes from './Bookmarker.module.css'

// = ({siteName, siteURL, id, deleteItem}) =>

class BookmarkItem extends React.Component {
    deleteItem = () => {
        let itemId = this.props.id
        this.props.deleteItem(itemId)
    }
    render() {
        return (
            <li className={classes.bookmark}>
                <span>{this.props.siteName}</span>
                <a className={`${classes.btn} ${classes.btnDefault}`} href={this.props.siteURL} target="_blank" >Visit</a>
                <button onClick={this.deleteItem} className={`${classes.btn} ${classes.btnDanger}`}>Delete</button>

            </li>
        )
    }
}

export default BookmarkItem;