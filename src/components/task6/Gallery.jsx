import React from 'react';
import GalleryImage from './GalleryImage';
import classes from './Gallery.module.css';
import { reguestAPI } from '../api/api'
import Paginator from '../common/Paginator/Paginator';


class Gallery extends React.Component {
    state = {
        pageNumber: 1,
        pageSize: 10,
        isFetching: true,
        images: [],
        currentImageIndex: 0,
        isLoopMode: true,
        totatUsersQuantity: 100,




    }

    componentDidMount() {
        this.requestGallery(this.state.pageNumber)

    }

    componentDidUpdate() {

    }

    requestGallery = async (pageNumber) => {
        let { pageSize } = this.state
        let response = await reguestAPI.getImages(pageNumber, pageSize)
        if (response.status === 200) {
            this.setState({
                images: [...response.data],
                isFetching: false
            })
        }
    }

    changeSlide = (e) => {
        let newIndex = this.state.currentImageIndex
        if (e.currentTarget.dataset.direction === 'next') {
            if(newIndex < this.state.images.length - 1){
                newIndex = this.state.currentImageIndex + 1
            } else {
                newIndex = 0
            }
            
        } else if(newIndex === 0 ){
            newIndex = this.state.images.length - 1
        } else {
            newIndex = this.state.currentImageIndex - 1
        }
        this.setState({ currentImageIndex: newIndex })
    }

     onPageChanged = (page) => {
         this.requestGallery(page)
         this.setCurrentPage(page)
     }
     
     setCurrentPage = (page) => {
         this.setState((state) => ({pageNumber: page}))
     }


    render() {

        return (
            <div className={classes.gallery_wrapper}>
                {this.state.isFetching ? <div>...Loading</div> :
                    <>
                    <div className={classes.gallery_container}>
                        <div className={classes.gallery_leftButton}>
                            <button data-direction="prev" onClick={this.changeSlide} >&larr;</button>
                        </div>
                        < GalleryImage image={this.state.images[this.state.currentImageIndex]} />
                        <div className={classes.gallery_rightButton}>
                            <button data-direction="next" onClick={this.changeSlide} >&rarr;</button>
                        </div>
                    </div>
                    <Paginator pageNumber={this.state.pageNumber} 
                    pageSize={this.state.pageSize} 
                    totatUsersQuantity={this.state.totatUsersQuantity} 
                                onPageChanged={this.onPageChanged} 
                    
                    />
                    </>
                }
            </div>
        )
    }
}
export default Gallery;