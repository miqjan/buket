import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Elements } from 'react-stripe-elements'
import {StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm.jsx'; 
import {getSelectedPrice, SendChargeObject} from '../../../../../actions/Billing';
import Check from '../check.jsx';

class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stripe: null,
        }
    }

    componentWillMount() {
        if(!this.props.selected){
            this.props.history.push('/private/shipping');
        }
    }

    componentDidMount() {
        this.props.getSelectedPrice();
        if (window.Stripe) {
          this.setState({stripe: window.Stripe('pk_test_w1BsFTvR7EKKJMAAHp2yxN86')});
        } else {
          document.querySelector('#stripe-js').addEventListener('load', () => {
            // Create Stripe instance once Stripe.js loads
            this.setState({stripe: window.Stripe('pk_test_12345')});
          });
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div className="billing">
                <div className="step">
                    <ul>
                        <li>
                            <Link to="/pages/shopping-cart">
                                <span className="step-item">1</span>
                            </Link>
                            ordering
                            </li>
                        <li>
                            <Link to="/private/shipping">
                                <span className="step-item">2</span>
                            </Link>
                            shipping
                            </li>
                        <li className="active" >
                            <span className="step-item">3</span>
                            billing
                        </li>
                    </ul>
                </div>
                <div className="billing-check-content">
                    <Check 
                        products={this.props.card.products} 
                        shipping={this.props.regions.find(obj => obj._id === this.props.selected.region)} 
                        language={this.props.language} 
                    />
                </div>
                <div className="billing-content">
                    <StripeProvider stripe={this.state.stripe}>
                        <Elements>
                            <InjectedCheckoutForm total={this.props.price} SendChargeObject={this.props.SendChargeObject}/>
                        </Elements>
                    </StripeProvider>
                </div>
            </div>
        );
    }
}

Billing.propTypes = {
    products: PropTypes.array,
    shipping: PropTypes.object,
    price: PropTypes.number,
    SendChargeObject: PropTypes.func,
    getSelectedPrice: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        language: state.language.location,
        card: state.card,
        selected: state.shipping.select,
        regions: state.shipping.regions,
        price: state.billing.price,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedPrice: () => dispatch(getSelectedPrice()),
        SendChargeObject: (token) => dispatch(SendChargeObject(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
