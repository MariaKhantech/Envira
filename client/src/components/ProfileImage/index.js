import React, { Component } from 'react'
import { Auth } from 'aws-amplify';
import { Storage } from "aws-amplify";
import Axios from 'axios';
import "./profileImage.css"

export default class index extends Component {
    state = {
        profile: [],
        selectedFile: '',
        imagePreviewUrl: '',
        selectedFileName: 'Choose file',
        imageName: [],
    }

    async componentDidMount() {
        try {
            // get the current logged in user details
            const user = await Auth.currentAuthenticatedUser();
            // get username from user object
            const userDetail = user.username;
            console.log(userDetail)
            // get the user details for logged in user from the User table 
            Axios.get(`/api/auth/user/${userDetail}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.setState({
                            profile: response.data,
                        });
                        this.getImage()
                    })
                .catch(err => console.log(err))
        } catch (error) {
            if (error !== "No current user") {
                console.log(error);
            }
        }
    }

    getImage = () => {
        const UserId = this.state.profile.id
        console.log(UserId)
        Axios.get(`/api/auth/image/${UserId}`)
            .then(
                (response) => {
                    this.setState({
                        imageName: response.data

                    });
                    console.log(this.state.imageName)
                    this.getImageFromS3()
                })
            .catch(err => console.log(err))

    }

    getImageFromS3 = () => {
        let fileName = this.state.imageName.image_name
        console.log(fileName)
        Storage.get(fileName)
            .then(
                (data) => {
                    console.log(data)
                    this.setState({
                        imagePreviewUrl: data
                    });
                })
            .catch(err => console.log(err))
    }

    handleImageUpload = async (event) => {
        event.preventDefault();
        // save image in S3
        await Storage.put(this.state.selectedFileName, this.state.selectedFile);
        console.log('successfully saved file...');
        console.log('handle uploading-', this.state.selectedFile);

        const { selectedFileName } = this.state
        console.log(selectedFileName)
        const UserId = this.state.profile.id;
        console.log(UserId)
        // post image name in image model
        Axios.post("/api/auth/image", {
            selectedFileName,
            UserId
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }

    handleImageUpdate = async (event) => {
        event.preventDefault();
        // save image in S3
        await Storage.put(this.state.selectedFileName, this.state.selectedFile);
        console.log('successfully saved file...');

        const { selectedFileName } = this.state
        console.log(selectedFileName)
        const UserId = this.state.profile.id;
        console.log(UserId)
        // post image name in image model
        Axios.put(`/api/auth/image/${UserId}`, {
            selectedFileName,
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }

    handleImageChange = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(reader)

        reader.onloadend = () => {
            this.setState({
                selectedFile: file,
                selectedFileName: file.name,
                imagePreviewUrl: reader.result,
                displayUploadButton: true
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
                <div className="previewComponent ">
                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                    <div className="row justify-content-center mt-5">

                        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                            <input
                                id="upload"
                                type="file"
                                onChange={this.handleImageChange}
                                className="form-control border-0"
                            />
                            <label
                                id="upload-label"
                                htmlFor="upload"
                                className="font-weight-light text-muted"
                            >
                                {this.state.selectedFileName}
                            </label>
                            <div className="input-group-append">
                                <label
                                    htmlFor="upload"
                                    className="btn btn-secondary m-0 rounded-pill px-2"
                                >
                                    {' '}
                                    <i className="fa fa-cloud-upload mr-1 text-white" />
                                    <small className="text-uppercase font-weight-bold text-white">
                                        Choose file
								</small>
                                </label>
                            </div>
                        </div>
                    </div>
                    {!this.state.imageName && (
                        <div className="row justify-content-center mt-2 ">
                            <button onClick={this.handleImageUpload} className="btn btn-primary">Upload</button>
                        </div>
                    )}
                    {this.state.imageName && (
                        <div className="row justify-content-center mt-2 ">
                            <button onClick={this.handleImageUpdate} className="btn btn-primary">Update</button>
                        </div>
                    )}
                </div>
            </>
        )
    }
}
