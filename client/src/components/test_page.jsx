import React, { Component } from 'react';
import { render } from 'react-dom';

class TestPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="card col-sm-3 px-0 m-1">
                        <img class="img-fluid p-0 m-0" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Button</a>
                        </div>
                    </div>
                    <div class="card col-sm-3 m-1">
                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Button</a>
                        </div>
                    </div>
                    <div class="card col-sm-3 m-1">
                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestPage;