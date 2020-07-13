import React, {Component} from "react";
import './main.css';
import BookmarksResult from "../BookmarksResult/BookmarksResult";

export default class Main extends Component {

    state = {
        siteName: '',
        siteUrl: '',
        emptyForm: false,
        invalidUrl: false,
        bookmarks: []
    };

    componentDidMount() {
        this.getBookmarksFromStorage()
    }


    getBookmarksFromStorage = () => {
        this.setState({
            bookmarks: JSON.parse(localStorage.getItem('bookmarks'))
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        const {siteName, siteUrl} = this.state;


        if (this.validateForm(siteName, siteUrl)) {
            const bookmark = {
                siteName,
                siteUrl
            };
            if (localStorage.getItem('bookmarks') === null) {
                let bookmarks = [];
                bookmarks.push(bookmark);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            } else {
                let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                bookmarks.push(bookmark);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            }
            this.setState({
                siteName: '',
                siteUrl: ''
            });

        }
        this.getBookmarksFromStorage()
    };


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    validateForm = (siteName, siteUrl) => {
        if (!siteName || !siteUrl) {
            this.setState({
                emptyForm: true
            });
            alert('Please fill the form');
            return false;
        }

        const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        if (!siteUrl.match(regex)) {
            this.setState({
                invalidUrl: true
            });
            alert('Please use a valid url');
            return false;
        }

        return true;
    };
    deleteBookmark = (url) => {
        let bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
        for (let i = 0; i < bookmarks.length; i++) {
            if (bookmarks[i].siteUrl === url) {
                bookmarks.splice(i, 1);
            }
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        this.getBookmarksFromStorage();
    };


    render() {
        const {siteName, siteUrl, bookmarks} = this.state;

        return (
            <div>
                <div className="jumbotron">
                    <h2>Bookmark your favorite Sites</h2>

                    <form id="myForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Site Name</label>
                            <input type="text"
                                   className="form-control"
                                   name="siteName"
                                   placeholder="Website Name"
                                   value={siteName}
                                   onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Site URL</label>
                            <input type="text"
                                   className="form-control"
                                   name="siteUrl"
                                   placeholder="Website URL"
                                   value={siteUrl}
                                   onChange={this.onChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className="row marketing">
                    <div className="col-lg-12">
                        <div id="bookmarksResult">
                            <BookmarksResult bookmarks={bookmarks} deleteBookmark={this.deleteBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
