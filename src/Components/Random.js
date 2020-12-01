import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        const Rand = Math.floor(Math.random() * (this.props.max - this.props.min)) + this.props.min
        return (
            <div>
                <h5>Random value between {this.props.min} and {this.props.max} => {Rand}</h5>
            </div>
        )
    }
}
