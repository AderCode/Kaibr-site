import React, { Component } from "react";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            err: null
        }

    }

    handleSubmit() {
        let name = this.getValue("ContactName");
        let email = this.getValue("ContactEmail");
        let message = this.getValue("ContactMessage");
        let subject = this.checkSubject();
        let validEmail = this.checkEmail(email)

        validEmail && name !== "" && message !== ""
        ?
        this.sendInfo({name, email, subject, message})
        :
        this.setState({ err: "required" })
    }

    getValue(id) {
        return document.getElementById(id).value;
    }

    checkSubject() {
        let subject = this.getValue("ContactSubject");
        return subject === "" ? "Request for Info" : subject;
    }

    checkEmail(email) {
       return /@..../i.test(email) && /\.../i.test(email) ? true :  false
    }

    sendInfo(data) {
        //send data to mailgun api
    }

    render() {
        let $invalid = "*Invalid email"
        return (
            <div className="container-fluid my-2 py-5">
                <div className="row w-75 mx-auto m-5 py-5">
                    <div className="card col-md-12 px-0 my-2 mx-auto container-fluid">
                        <div className="card-body row mx-auto w-100">
                            <div className="view overlay mx-auto">
                                <img className="card-img-top col-md-3 img-fluid rounded-circle mx-auto" src="https://s3.amazonaws.com/kaibr/logo/TEMP_LOGO.png" width="300" />
                            </div>
                            <div className="col-md-8 my-1 mx-auto my-auto">
                                <p className="card-title mx-auto w-75 pb-2 h1-responsive text-center">
                                    Request Info
                                </p>
                                <form className="mx-auto w-75">

                                <div className="md-form">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="ContactName" className="form-control" />
                                    <label>Your name</label>
                                </div>

                                <div className="md-form">
                                    <i className="fa fa-envelope prefix grey-text"></i>
                                    <input type="email" id="ContactEmail" className="form-control" />
                                    <label>Your email</label>
                                </div>

                                <div className="md-form">
                                    <i className="fa fa-tag prefix grey-text"></i>
                                    <input type="text" id="ContactSubject" className="form-control" />
                                    <label>Subject</label>
                                </div>

                                <div className="md-form">
                                    <i className="fa fa-pencil prefix grey-text"></i>
                                    <textarea type="text" id="ContactMessage" className="form-control md-textarea" rows="3"></textarea>
                                    <label>Your message</label>
                                </div>

                                <div className="text-center mt-4">
                                    <div className="btn btn-outline-secondary" onClick={() => this.handleSubmit()}>Send<i className="fa fa-paper-plane-o ml-2"></i></div>
                                </div>
                            </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}