import React from 'react';
import classes from './Bookmarker.module.css'
import BookmarkForm from './BookmarkForm'
import BookmarkItem from './BookmarkItem'

class Bookmarker extends React.Component {
    state = {
        sitesLog: []
    }


    getFormData = (siteName, siteURL) =>{
        let generatorId = Math.floor(Math.random()*100)
        this.setState({
            ...this.state,
            sitesLog: [...this.state.sitesLog, {id: generatorId, siteName,
                siteURL}]
        })

    }
    deleteItem= (itemId) => {
        let newSitesLog = this.state.sitesLog.filter(site=>{
           return site.id === itemId ? null : site
        })
        this.setState({
            ...this.state,
            sitesLog:[...newSitesLog]
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
                            getFormData={this.getFormData} />
                    </div>
                    <ul className={classes.bookmarks} id="bookmarksResult">
                        {this.state.sitesLog.length > 0 ?
                            this.state.sitesLog.map(bookmark => <BookmarkItem deleteItem={this.deleteItem} {...bookmark} key={bookmark.id} />) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Bookmarker;