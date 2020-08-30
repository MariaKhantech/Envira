import React, { Component } from 'react'
import "./profileImage.css"

export default class index extends Component {
    state = {
        file: '',
        imagePreviewUrl: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // save image in S3
        console.log('handle uploading-', this.state.file);
    }

    handleImageChange = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(reader)

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="profile-img-update" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input className="fileInput"
                        type="file"
                        onChange={this.handleImageChange} />
                    <button className="submitButton m-auto"
                        type="submit"
                        onClick={this.handleSubmit}>Upload Image</button>
                </form>
            </>
        )
    }
}
