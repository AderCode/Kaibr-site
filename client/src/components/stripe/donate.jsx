import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm'; // must be a child of Elements wrapper

class Donate extends Component {

    render() {
        return (
            <StripeProvider apiKey="">
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }

}

export default Donate;