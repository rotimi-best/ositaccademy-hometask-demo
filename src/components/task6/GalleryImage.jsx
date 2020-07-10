import React from 'react';
import classes from './Gallery.module.css';
const GalleryImage = (props) => {
    return (
        <div className={classes.image_container}>
            <div className={classes.gallery_image} >
                <img src={props.image.download_url} alt="" />
            </div>

            <div className={classes.gallery_author} >
                {props.image.author}
            </div>
        </div>
    )
}
export default GalleryImage;