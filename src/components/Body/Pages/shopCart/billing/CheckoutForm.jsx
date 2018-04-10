import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import PropTypes from 'prop-types';

//import AddressSection from './AddressSection';
import CardSection from './CardSection.jsx';

class CheckoutForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            disabled: false,
        }
    }
    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();
        this.setState({disabled: true});
        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken().then(({token}) => {
            this.setState({disabled: false});
            if(token){
                this.props.SendChargeObject(token);
            }
        });

        // However, this line of code will do the same thing:
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }

    render() {
        return (
            <div className="paymant">
                <form onSubmit={this.handleSubmit}>
                    <CardSection />
                    <button disabled={this.state.disabled}>Pay  ${this.props.total}</button>
                </form>
            </div>
            
        );
    }

}
CheckoutForm.propTypes = {
    SendChargeObject: PropTypes.func,
}
export default injectStripe(CheckoutForm);