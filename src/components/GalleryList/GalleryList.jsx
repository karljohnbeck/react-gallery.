import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem.jsx'


class GalleryList extends Component {
    render() {
        return (
            <>
                {this.props.galleryList.map((galleryArt) => {
                    return (
                        <GalleryItem key={galleryArt.id}
                        smashThatLikeButton={this.props.smashThatLikeButton} 
                        galleryArt={galleryArt} />
                    )
                })}
            </>
        )
    }
}

export default GalleryList;