
import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                <img src={this.props.picture}></img>
        <h5>First name: {this.props.firstName}</h5>
        <h5>Last name: {this.props.lastName}</h5>
        <h5>Gender: {this.props.gender}</h5>
        <h5>Height: {this.props.height}</h5>
        <h5>Birth: {this.props.birth.toString().slice(0,15)}</h5>
                </div>
            </div>
        )
    }
}

