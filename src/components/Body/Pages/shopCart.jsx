import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash'
import { connect } from 'react-redux';
//import { getProductsByIdsArray } from '../../../actions/Product';
import { removeItem, incrementCount, decrementCount } from '../../../actions/Card';
import config from '../../../../config';

class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.removeItem = this.removeItem.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    componentWillMount() {
        this.setState({ products: this.props.card.products });
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ products: nextProps.card.products });
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
    removeItem(e) {
        this.props.removeItem(e.target.dataset.id);
    }
    incrementCount(e) {
        this.props.incrementCount(e.target.dataset.id);
    }
    decrementCount(e) {
        this.props.decrementCount(e.target.dataset.id);
    }
    render() {
        if (_.isEmpty(this.state)) {
            return ("Empty card");
        }
        return (
            <div className="shop-cart">
                {this.props.isSignIn ? (
                    <div className="step">
                        <ul>
                            <li className="active">
                                <span className="step-item">1</span>
                                ordering
                            </li>
                            <li >
                                <span className="step-item">2</span>
                                shipping
                            </li>
                            <li>
                                <span className="step-item">3</span>
                                billing
                            </li>
                        </ul>
                    </div>
                ):(
                    <div className="step">
                        <ul>
                            <li className="active">
                                signIn
                            </li>
                            <li >
                                signUP
                            </li>
                        </ul>
                    </div>
                )
                }

                <div className="cart-content">
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sub-total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><img src={config.static_server_url + product.imgUrl} alt="item" /></td>
                                                <td>
                                                    caxik
                                                    <span className="remove" data-id={product.id} onClick={this.removeItem} >Remove</span>
                                                </td>
                                                <td>${product.price}</td>
                                                <td>
                                                    <ul>
                                                        <li className="minus"><span data-id={product.id} onClick={this.decrementCount} >-</span></li>
                                                        <li><input type="text" value={product.count} readOnly /></li>
                                                        <li className="plus"><span data-id={product.id} onClick={this.incrementCount} >+</span></li>
                                                    </ul>
                                                </td>
                                                <td>${product.count * product.price}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="cart-check">
                        <ul style={{padding :'50px'}} >
                            <li>Total</li>
                            <li>${this.state.products.reduce((sum,current)=>{
                                return sum + (current.price * current.count);
                            },0)}</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

ShopCart.propTypes = {
    isSignIn: PropTypes.bool,
    card: PropTypes.object,
    decrementCount: PropTypes.func,
    incrementCount: PropTypes.func,
    removeItem: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        isSignIn: state.user.isSignIn,
        card: state.card,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        decrementCount: (id) => dispatch(decrementCount(id)),
        incrementCount: (id) => dispatch(incrementCount(id)),
        removeItem: (id) => dispatch(removeItem(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);