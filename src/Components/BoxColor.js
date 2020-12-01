import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        
        const style = {
            backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
            color: this.props.fontColor
        }
        return (
            <div style={style}>
                rgb({this.props.r}, {this.props.g},{this.props.b})
                #{this.props.r}.toString(16)
            </div>
        )
    }
}
