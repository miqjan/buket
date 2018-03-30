import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

    print(){
        require('../../../../../public/css/media/print.scss');
        window.print();
    }

    render() {
        const {
            products,
            language,
            shipping,
        } = this.props;
        let sum = shipping? shipping.price :  0;
        return (
            <div className="cart-check">
                <table>
                    <tbody>
                        {
                            products && products.map((item, index) => {
                                sum += item.count * item.price
                                return (
                                    <tr key={index}>
                                        <td>{item.name[language]}</td>
                                        <td>x{item.count}</td>
                                        <td>${item.price}</td>
                                        <td>${item.count * item.price}</td>
                                    </tr>
                                );
                            })
                            
                        }
                        {
                            
                            shipping && (
                                <tr>
                                    <td colSpan={3}>{shipping.name[language]}</td>
                                    <td>${shipping.price}</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td colSpan={3} >Total</td>
                            <td>${sum}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="print-btn" >
                    <img src="/public/fonts/print.svg" alt="print" onClick={this.print} />
                </div>
            </div>
        );
    }
}

Check.propTypes = {
    products: PropTypes.array,
    shipping: PropTypes.object,
};

export default Check;