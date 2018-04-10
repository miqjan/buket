import React from 'react';
import { CardElement } from 'react-stripe-elements';

export default class CardSection extends React.Component {

    render() {
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '25px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '25px',
                
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        return (
            <div className="CardElement">
                <CardElement style={style} />
            </div>          
        );
    }
};
