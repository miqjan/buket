import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShopCart extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

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
            <div className="shop-cart">
                <div className="step">
                    <ul>
                        <li className="passed">
                            <Link to="#" >
                                <span className="step-item">1</span>                        
                            </Link>
                            step 1
                        </li>
                        <li className="active">
                            <span className="step-item">2</span>
                            step 2
                        </li>
                        <li>
                            <span className="step-item">3</span>                            
                            step 3
                        </li>
                    </ul>
                </div>
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
                                <tr>
                                    <td><img src="http://localhost:5000/images/products/f1be815e-d5c6-41ea-8352-7a3b34f9bf32.jpeg" alt="item"/></td>
                                    <td>caxik</td>
                                    <td>20</td>
                                    <td>
                                        <button type="button">-</button>
                                        <input type="number" min="1" max="5"/>
                                        <button type="button">+</button>
                                    </td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-check">
                        <ul>
                            <li>item1</li>
                            <li>item2</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ShopCart.propTypes = {
   
};

export default ShopCart;