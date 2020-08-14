import React, { Component } from "react";


class GalleryItem extends Component {

    state = {
        isPicture: true
    }
    toggleState = () => {
        this.setState({
            isPicture: !this.state.isPicture
        })
    }


    render() {
        return (
            <div>
                {this.state.isPicture ? <img onClick={this.toggleState} 
                src={this.props.galleryArt.path} />
                    : <div className="imageDescription" onClick={this.toggleState} >
                        <p>{this.props.galleryArt.description}</p>
                        </div>}

                <button onClick={() => this.props.smashThatLikeButton(this.props.galleryArt.id)} >Is goot</button>
                <p>{this.props.galleryArt.likes} people like this!</p>
            </div>
        )
    }
}

export default GalleryItem;