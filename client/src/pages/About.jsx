import React, { Component } from "react";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {

        return (
            <div className="container-fluid">

                <div className="row w-75 mx-auto mt-5">
                    <div className="card col-md-12 my-2 mx-auto p-0">
                        <img className="view img-fluid z-depth-1-half w-100 p-0" src="https://s3.amazonaws.com/kaibr/banners/galaxy.jpg" />
                        <div className="card-body">
                            <h1 className="card-title text-center mx-auto border border-top-0 border-left-0 border-right-0 border-light w-75 pb-2 h1-responsive">
                                About Kaibr
                            </h1>
                            <h5 className="text-justify h5-responsive mb-5">
                                The driving force behind everything we do, Kaibr, represents our love for nerdy things. Kaibr comes from the word Kaiburr (also spelled Kyber) which are the ancient
                                 crystals at the very heart of Lightsabers, yes those ones. Kaibr rivals the magnificent power and astounding grace of the fabled crystals that bring to life the Jedi’s
                                 most sacred weapon. Our code, sleek and elegant, yet brilliantly empowering, too will breath life into you’re vision, ambition, and dream. At Kaibr our passion, diligence,
                                 and perseverance is evident in every project we take on. We will meet every goal with grit and tenacity ensuring you’re project's ultimate success.</h5>
                            <h3 className="text-center h3-responsive">Just like the strongest stars in the galaxies, the most powerful apps have hearts of Kaibr.</h3>
                        </div>
                    </div>
                </div>

                <div className="row w-75 mx-auto my-5">
                    <div className="card col-md-12 mx-auto p-0">
                        <img className="w-50 img-fluid rounded-circle z-depth-1 mx-auto my-3" src="https://s3.amazonaws.com/kaibr/headshots/Luke.JPG" />
                        <div className="card-body">
                            <div className="col-md-8 mx-auto text-center">
                                <h1 className="card-title mx-auto border border-top-0 border-left-0 border-right-0 border-light w-75 pb-2 h1-responsive">
                                    Luke Przekwas
                                </h1>
                                <h5 className="text-justify h5-responsive">
                                    Luke always considered himself the "tech" guy among friends and coworkers, not because he always knew the answers, but because
                                    he loved to research and find a solution.  He is driven by a passion of learning and helping others which was developed by working
                                    as the front of house manager at <a className="text-secondary" href="https://www.urbanstandard.com"> Urban Standard </a>
                                    for almost ten years before deciding to dive head first into a new career in technology.</h5>
                                <h5 className="text-justify h5-responsive mb-5">
                                    With a computer science background and knowledge of Java, Luke started self-teaching himself Javascript on <a className="text-secondary" href="https://www.codeacademy.com/"> Code Academy </a>
                                    before learning about <a className="text-secondary" href="https://covalence.io/?referral=0477b6e2-303c-e811-80c3-000d3a132ae5" > Covalence Fullstack Coding Bootcamp </a> in Birmingham, AL and enrolling.
                                    His love for coding was nurtured to blossom into where he is today!</h5>
                                <h3 className="h3-responsive">
                                    "My passion for learning and my enthusiasm in helping others is at the heart of my code."</h3>
                                <h3 className="h3-responsive text-right">- Luke</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row w-75 mx-auto my-5">
                    <div className="card col-md-12 mx-auto p-0">
                        <img className="w-50 img-fluid rounded-circle z-depth-1 mx-auto my-3" src="https://s3.amazonaws.com/kaibr/headshots/Matthew.JPG" />
                        <div className="card-body">
                            <div className="col-md-8 my-1 mx-auto text-center">
                                <h1 className="card-title mx-auto border border-top-0 border-left-0 border-right-0 border-lightpb-2 w-75 pb-2 h1-responsive">
                                    Matthew Aderhold
                                </h1>
                                <h5 className="text-justify h5-responsive">
                                    After graduating High School, Matthew went off to college to major in
                                    Psychology. Then, after working for a few years, having been a Mental Health Technician and Chemistry Lab Technician, Matthew realized his
                                    interest in psychology was just that, an interest. His true passion laid elsewhere, and so he decided
                                    to continue his education, but this time in a much more "techy" direction.</h5>
                                <h5 className="text-justify h5-responsive mb-5">
                                    Inspired by films like The Matrix (1999), Hackers (1995), and Tron (1982), Matthew's true passion lied in Technology. So with a short search, Matthew stumbled upon and enrolled in the
                                    <a className="text-secondary" href="https://goo.gl/DTdrg9" > Covalence Fullstack Coding Bootcamp</a> where his love for tech and code
                                    were evolved into skills of mass creation.</h5>
                                <h3 className="h3-responsive">
                                    "Development is more than a career for me; it's fun, challenging, and rewarding."</h3>
                                <h3 className="h3-responsive text-right">- Matthew</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}