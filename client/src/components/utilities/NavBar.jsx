import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark deep-purple lighten-1 py-0 px-3 m-0 fixed-top">
                <a class="navbar-brand" href="/">
                    <img src="https://s3.amazonaws.com/kaibr/logo/TEMP_LOGO.png" alt="K" height="35" /> Kaibr
                </a>

                {/* <!-- Collapse button --> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Collapsible content --> */}
                <div class="collapse navbar-collapse" id="basicExampleNav">

                    {/* <!-- Links --> */}
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    {/* <!-- Links --> */}
                </div>
                {/* <!-- Collapsible content --> */}
            </nav>
        )
    }
}