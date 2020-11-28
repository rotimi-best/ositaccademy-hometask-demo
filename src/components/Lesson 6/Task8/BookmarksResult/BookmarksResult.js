import React from 'react';

const BookmarksResult = ({bookmarks, deleteBookmark}) => {

    if (bookmarks === undefined || bookmarks.length === 0) return null;

    return (
        <div className="well">
            {bookmarks.map((item,idx) => {
                return (
                    <h3 key={idx}>{item.siteName}
                         <a className="btn btn-default" target="_blank" href={item.siteUrl}>Visit</a>
                        <a onClick={() => deleteBookmark(item.siteUrl)}
                           className="btn btn-danger"
                          >Delete</a>
                    </h3>
                )
            })}
        </div>
    );
};

export default BookmarksResult;