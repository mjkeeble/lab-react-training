import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        isClicked: false,
        // toggleClicked: this.toggleClicked.bind(this)
    }

    toggleClicked =()=> {
        this.setState((state) => ({ 
            isClicked: !state.isClicked 
        }));
    }


    render() {

        return (
            <div>
                <img src={this.state.isClicked ? this.props.img : this.props.imgClicked} onClick={this.toggleClicked} alt="" />
            </div>
        )
    }
}
