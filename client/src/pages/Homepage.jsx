import React, { Component } from "react";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            activeItem: 1,
            maxLength: 4
        }
    }

    next() {
        const nextItem = this.state.activeItem + 1;
        if (nextItem > this.state.maxLength) {
            this.setState({ activeItem: 1 });
        } else {
            this.setState({ activeItem: nextItem });
        }
    }

    prev() {
        const prevItem = this.state.activeItem - 1;
        if (prevItem < 1) {
            this.setState({ activeItem: this.state.maxLength });
        } else {
            this.setState({ activeItem: prevItem });
        }
    }

    goToIndex(item) {
        if (this.state.activeItem !== item) {
            this.setState({
                activeItem: item
            });
        }
    }

    render() {
        return (
            <div>
                {/* <!--CAROUSEL--> */}
                <div id="carousel-example-2" className="carousel slide carousel-fade" style={{ 'marginTop': '2.5rem' }} data-ride="carousel">
                    {/* <!--Indicators--> */}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                        <li data-target="#carousel-example-2" data-slide-to="3"></li>
                    </ol>
                    {/* <!--/.Indicators--> */}
                    {/* <!--Slides--> */}
                    <div className="carousel-inner" role="listbox">
                        {/* <!--Slide 1--> */}
                        <div className="carousel-item active">
                            <div className="view">
                                <img className="d-block w-100" src="https://s3.amazonaws.com/kaibr/carousel/slide1.jpg" alt="First slide" />
                                <div className="mask"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive"></h3>
                                <p></p>
                            </div>
                        </div>
                        {/* <!--/Slide 1--> */}
                        {/* <!--Slide 2--> */}
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://s3.amazonaws.com/kaibr/carousel/slide2.jpg" alt="Second slide" />
                                <div className="mask"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive"></h3>
                                <p></p>
                            </div>
                        </div>
                        {/* <!--/Slide 2--> */}
                        {/* <!--Slide 3--> */}
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://s3.amazonaws.com/kaibr/carousel/slide3.jpg" alt="Third slide" />
                                <div className="mask"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Birmingham, AL</h3>
                                <p></p>
                            </div>
                        </div>
                        {/* <!--/Slide 3--> */}
                        {/* <!--Slide 4--> */}
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://s3.amazonaws.com/kaibr/carousel/slide4.jpg" alt="Fourth slide" />
                                <div className="mask"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive"></h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    {/* <!--/Slide 4--> */}
                    {/* <!--Controls--> */}
                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    {/* <!--/.Controls--> */}
                </div>
                {/* <!--/CAROUSEL--> */}

                <div className="container-fluid mx-auto mt-5 homepage">

                    <div className="dropdown-divider w-75 mx-auto"></div>

                    {/* SLOGAN QUOTE */}
                    <div className="row my-5 desktop-spacing">
                        <p className="col-sm-12 h1-responsive text-center m-0">"The most powerful apps have hearts of Kaibr"</p>
                    </div>
                    <div className="dropdown-divider w-75 mx-auto"></div>

                    {/* WEBSITE SECTION */}
                    <div className="row desktop-spacing">
                        <div className="col-md-4">
                            <img className="view img-fluid desktop-image-margin-left" src="https://s3.amazonaws.com/kaibr/icons/web.png" />
                        </div>
                        <div className="col-md-8 h1-responsive my-auto desktop-spacing font-weight-bold font-italic text-center">
                            <p>Powerful Responsive Websites</p>
                            <p>Multi-Browser Capabilities</p>
                            <p className="mb-0">Mobile Friendly</p>
                        </div>
                    </div>
                    <div className="dropdown-divider w-75 mx-auto my-5"></div>

                    {/* MOBILE SECTION */}
                    <div className="row desktop-spacing">

                        {/*MOBILE*/}
                        <div className="col-md-4 display-desktop-off">
                            <img className="view img-fluid mobile-image-adjust" src="https://s3.amazonaws.com/kaibr/icons/mobile.jpg" />
                        </div>
                        {/*MOBILE*/}
                        <div className="col-md-8 h2-responsive my-auto desktop-spacing font-weight-bold font-italic text-center">
                            <p>Native Android and iOS Apps</p>
                            <p>Reliable and Resilient</p>
                            <p>Android/Apple Store Ready</p>
                        </div>
                        {/*DESKTOP*/}
                        <div className="col-md-4 display-mobile-off display-desktop-on">
                            <img className="view img-fluid" style={{ 'paddingRight': '4rem' }} src="https://s3.amazonaws.com/kaibr/icons/mobile.jpg" />
                        </div>
                        {/*DESKTOP*/}
                    </div>
                    <div className="dropdown-divider w-75 mx-auto my-5"></div>

                    {/* BRIEF ABOUTS */}
                    <h1 className="h1-responsive mx-auto col-sm-12 text-center font-italic mb-0">~ Our Team ~</h1>
                    <div className="row card-row mx-auto my-5">

                        {/*Kaibr Content Card*/}
                        <div className="card col-md-3 mx-auto mb-2">
                            <div className="view overlay px-2">
                                <img className="card-img-top img-fluid z-depth-1-half p-3 rounded-circle mx-auto my-3" src="https://s3.amazonaws.com/kaibr/logo/TEMP_LOGO_sq.png" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">Kaibr</h4>
                                <p className="card-text text-center">The driving force behind everything we do, Kaibr, represents our love for nerdy things.</p>
                            </div>
                        </div>
                        {/*Kaibr Content Card*/}

                        <div className="card col-md-3 mx-auto mb-2">
                            <div className="view overlay px-2">
                                <img className="card-img-top img-fluid z-depth-1-half rounded-circle mx-auto my-3" src="https://s3.amazonaws.com/kaibr/headshots/Luke.JPG" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">Luke Przekwas</h4>
                                <p className="card-text text-center">"My passion for learning and my enthusiasm in helping others is at the heart of my code."</p>
                            </div>
                        </div>
                        <div className="card col-md-3 mx-auto mb-2">
                            <div className="view overlay px-2">
                                <img className="card-img-top img-fluid z-depth-1-half rounded-circle mx-auto my-3" src="https://s3.amazonaws.com/kaibr/headshots/Matthew.JPG" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">Matthew Aderhold</h4>
                                <p className="card-text text-center">"Development is more than a career for me; it's fun, challenging, and rewarding."</p>
                            </div>
                        </div>
                    </div>



                    {/* PREVIOUS CLIENTS LOGOS */}
                    {/* <div className="row m-5 desktop-spacing">

                    <div className="col-sm-2">
                        <img className="img-fluid" src="http://via.placeholder.com/200x200" />
                    </div>

                    <div className="col-sm-2">
                        <img className="img-fluid" src="http://via.placeholder.com/200x200" />
                    </div>

                    <div className="col-sm-2">
                        <img className="img-fluid" src="http://via.placeholder.com/200x200" />
                    </div>

                    <div className="col-sm-2">
                        <img className="img-fluid" src="http://via.placeholder.com/200x200" />
                    </div>

                    <div className="col-sm-2">
                        <img className="img-fluid" src="http://via.placeholder.com/200x200" />
                    </div>

                    <div className="col-sm-2">
                        <img className="img-fluid" src="http://via.placeholder.com/200x200" />
                    </div>

                    </div> */}

                </div >

            </div >
        )
    }
}