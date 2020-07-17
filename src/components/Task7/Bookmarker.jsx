import React from 'react';
import classes from './Bookmarker.module.css'
import BookmarkForm from './BookmarkForm'
import BookmarkItem from './BookmarkItem'

class Bookmarker extends React.Component {
    state = {
        sitesLog: [],
        siteName: '',
        siteURL: '',
        inputNameText: '',
        inputUrlText: '',
        isEditModeActive: false,
        updatedBookmarkId: ''

    }

    componentDidMount() {
        this.getBookmarks()
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

    onInputBlur = (inputName) => {
        switch (inputName) {
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


    getBookmarks = () => {
        let request = new XMLHttpRequest();
        let bookmarkURL = `https://rotimi-best-cargo-transportation-api.glitch.me//bookmark/2`
        request.open('GET', bookmarkURL);
        request.responseType = 'json';

        request.send();

        request.onload = function () {


            if (request.status != 200) {
                alert(`Ошибка ${request.status}: ${request.statusText}`);
            } else {
                let bookmarks = request.response.bookmarks
                this.setState({
                    sitesLog: [...bookmarks]
                })
            }
        }.bind(this);

        request.onerror = function () {
            alert("Запрос не удался");
        };
    }

        setInputData = (inputText='', inputUrl='') => {
            this.setState({
                inputNameText: inputText,
                inputUrlText: inputUrl
            })
        }

        setEditModeData = (value) =>{
            this.setState({
                isEditModeActive: value
            })
        }

        setUpdatedBookmarkId = (bookMarkId) => {
            this.setState({
                updatedBookmarkId: bookMarkId
            })
        }

    render() {
        return (
            <div className={classes.bookmarker}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <nav>

                        </nav>
                        <h3>My Bookmarker</h3>
                    </div>

                    <div className={classes.jumbotron}>
                        <h2>Bookmark your favorite Sites</h2>
                        <BookmarkForm
                            getBookmarks={this.getBookmarks}
                            onInputBlur={this.onInputBlur}
                            onTextChange={this.onTextChange}
                            inputNameText={this.state.inputNameText}
                            inputUrlText={this.state.inputUrlText}
                            siteName={this.state.siteName}
                            siteURL={this.state.siteURL}
                            setInputData={this.setInputData}
                            setEditModeData={this.setEditModeData}
                            isEditModeActive={this.state.isEditModeActive}
                            updatedBookmarkId={this.state.updatedBookmarkId}
                            
                            
                            />
                    </div>
                    <ul className={classes.bookmarks} id="bookmarksResult">
                        {this.state.sitesLog.length > 0 ?
                            this.state.sitesLog.map(bookmark => <BookmarkItem 
                                setEditModeData={this.setEditModeData}
                                setInputData={this.setInputData}
                                getBookmarks={this.getBookmarks} 
                                setUpdatedBookmarkId={this.setUpdatedBookmarkId}
                                {...bookmark} 
                                key={bookmark._id} />) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Bookmarker;