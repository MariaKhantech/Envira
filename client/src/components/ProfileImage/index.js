import React, { Component } from 'react'

export default class index extends Component {
    state={
        file: '',
        imagePreviewUrl: ''
    }



    render() {
        return (
            <div>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input className="fileInput"
                        type="file"
                        onChange={this.handleImageChange} />
                    <button className="submitButton"
                        type="submit"
                        onClick={this.handleSubmit}>Upload Image</button>
                </form>
            </div>
        )
    }
}
