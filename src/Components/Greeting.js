import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        const greetText = {
            "en": "Hello",
            "de": "Hallo",
            "es": "Holla",
            "fr": "Bonjour"
        }
        return (
            <div>
                <h2>{greetText[this.props.lang]} {this.props.children}</h2>
            </div>
        )
    }
}
