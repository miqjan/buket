import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
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
            <footer>
                <div className="main-container">
                    <div className="footer-top">

                    </div>
                </div>
                <div className="footer-content">
                    <div className="main-container">
                        <div className="footer-wrap">
                            <div className="footer-sing-menu">
                                <ul>
                                    <li>
                                        <div className="footer-logo">
                                            <img src="../../../../../public/img/header-logo.png" alt="Buket" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <img src="../../../../../public/img/visa.png" alt="Buket" />
                                    </li>
                                    <li>
                                        <img src="../../../../../public/img/mastercard.png" alt="Buket" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {

};

export default Footer;