import React from "react";

function FormErrors(props) {
    if (
        props.formerrors &&
        (props.formerrors.blankfield || props.formerrors.passwordmatch || props.formerrors.phonenumber || props.formerrors.website)
    ) {
        return (
            <div className="error container text-danger">
                <div className="row justify-content-center">
                    {props.formerrors.passwordmatch
                        ? "Password value does not match confirm password value"
                        : ""}
                </div>
                <div className="row justify-content-center text-danger">
                    {props.formerrors.blankfield ? "All fields are required" : ""}
                </div>
                <div className="row text-danger">
                    {props.formerrors.phonenumber ? "Please enter correct phone number" : ""}
                </div>
                <div className="row text-danger">
                    {props.formerrors.website ? "Please enter correct website" : ""}
                </div>
            </div>
        );
    } else if (props.apierrors) {
        return (
            <div className="error container  text-danger">
                <div className="row justify-content-center">{props.apierrors}</div>
            </div>
        );
    } else if (props.formerrors && props.formerrors.cognito) {
        return (
            <div className="error container  text-danger">
                <div className="row justify-content-center">
                    {props.formerrors.cognito.message}
                </div>
            </div>
        );
    } else {
        return <div />;
    }
}

export default FormErrors;