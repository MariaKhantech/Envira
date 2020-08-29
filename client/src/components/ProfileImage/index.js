import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'

export default class index extends Component {

    state = {
        preview: null,
        src: "https://via.placeholder.com/150",


    }


    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }
    render() {
        return (
            <div>

                <Avatar
                    width={390}
                    height={295}
                    onCrop={this.onCrop}
                    onClose={this.onClose}
                    src={this.state.src}
                />
                <img src={this.state.preview} alt="Preview" />

            </div>
        )
    }
}
