import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//PAGES
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Contact from '../pages/Contact';

//COMPONENTS
import Footer from "../components/utilities/Footer";
import NavBar from "../components/utilities/NavBar";


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                    <Footer />
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;