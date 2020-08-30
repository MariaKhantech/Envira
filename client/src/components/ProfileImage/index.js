import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />
                    <button className="submitButton"
                        type="submit"
                        onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                </form>
            </div>
        )
    }
}
