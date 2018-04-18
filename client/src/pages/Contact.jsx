import React, { Component } from "react";
import { postContact } from '../services/contact';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameErr: false,
            emailErr: false,
            messageErr: false,
            isSubmitted: false
        }

    }

    handleSubmit() {
        let name = this.getValue("ContactName");
        let email = this.getValue("ContactEmail");
        let message = this.getValue("ContactMessage");
        let subject = this.checkSubject();
        let validEmail = this.checkEmail(email)
        let isName = this.checkName(name);
        let isMessage = this.checkMessage(message);

        isName && validEmail && isMessage
            ?
            this.sendEmail({ name, email, subject, message })
            :
            false
    }

    getValue(id) {
        return document.getElementById(id).value;
    }

    checkSubject() {
        let subject = this.getValue("ContactSubject");
        return subject === "" ? "Request for Info" : subject;
    }

    checkEmail(email = "") {
        let result = /.@..../i.test(email) && /\.../i.test(email) ? true : false;
        result ? this.setState({ emailErr: false }) : this.setState({ emailErr: true });
        return result;
    }

    checkName(name = "") {
        let result = name !== "" ? true : false;
        result ? this.setState({ nameErr: false }) : this.setState({ nameErr: true });
        return result;

    }

    checkMessage(message = "") {
        let result = message !== "" ? true : false;
        result ? this.setState({ messageErr: false }) : this.setState({ messageErr: true });
        return result;
    }

    sendEmail(data) {
        postContact(data);
        document.getElementById("ContactForm").reset();
        this.setState({ isSubmitted: true });
    }

    render() {
        let $invalid = this.state.emailErr ? <span className="d-inline text-danger"> *Invalid email</span> : false;
        let $nameRequired = this.state.nameErr ? <span className="d-inline text-danger"> *Required</span> : false;
        let $messageRequired = this.state.messageErr ? <span className="d-inline text-danger"> *Required</span> : false;
        let $thanks = this.state.isSubmitted ? <p className="text-success">Thank you for your interest!</p> : <p>  </p>
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
                                <form id="ContactForm" className="mx-auto w-75">

                                    <div className="md-form">
                                        <i className="fa fa-user prefix grey-text"></i>
                                        <input
                                            type="text"
                                            id="ContactName"
                                            className="form-control"
                                            onFocus={() => this.setState({ nameErr: false })}
                                            onBlur={() => this.checkName(this.getValue("ContactName"))}
                                        />
                                        <label>Your name{$nameRequired}</label>
                                    </div>

                                    <div className="md-form">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <input
                                            type="email"
                                            id="ContactEmail"
                                            className="form-control"
                                            onFocus={() => this.setState({ emailErr: false })}
                                            onBlur={() => this.checkEmail(this.getValue("ContactEmail"))}
                                        />
                                        <label>Your email{$invalid}</label>
                                    </div>

                                    <div className="md-form">
                                        <i className="fa fa-tag prefix grey-text"></i>
                                        <input
                                            type="text"
                                            id="ContactSubject"
                                            className="form-control"
                                        />
                                        <label>Subject</label>
                                    </div>

                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix grey-text"></i>
                                        <textarea
                                            type="text"
                                            id="ContactMessage"
                                            className="form-control md-textarea"
                                            rows="3"
                                            onFocus={() => this.setState({ messageErr: false })}
                                            onBlur={() => this.checkMessage(this.getValue("ContactMessage"))}
                                        ></textarea>
                                        <label>Your message{$messageRequired}</label>
                                    </div>

                                    <div className="text-center mt-4">
                                        {$thanks}
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