import React, { Component } from "react";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }


    render() {
        return (
            <div className="container-fluid my-2 py-5">
                <div className="row w-75 mx-auto m-5 py-5">
                    <div className="card col-md-12 px-0 my-2 mx-auto container-fluid">
                        <div className="card-body row mx-auto w-100">
                            <div className="view overlay">
                                <img className="card-img-top col-md-3 img-fluid rounded-circle mx-auto" src="https://s3.amazonaws.com/kaibr/logo/TEMP_LOGO.png" width="300" />
                            </div>
                            <div className="col-md-8 my-1 mx-auto my-auto text-center">
                                <p className="card-title mx-auto border border-top-0 border-left-0 border-right-0 border-light w-75 pb-2 h1-responsive">
                                    Contact Us
                                </p>
                                <p className="h5-responsive">Need a quote for a website or app?</p>
                                <p className="h5-responsive">Have questions about whether you need a website or app?</p>
                                <p className="h5-responsive">Just shoot an email our way and we will be more than happy to answer any questions or set up for a meeting to discuss in more detail.</p>
                                <p className="h5-responsive">Email us at:<br /><a className="text-secondary" href="mailto:luke@kaibr.net">luke@kaibr.net</a> or <a className="text-secondary" href="mailto:matthew@kaibr.net">matthew@kaibr.net</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}