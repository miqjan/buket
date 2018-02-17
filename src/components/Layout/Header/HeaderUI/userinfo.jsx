import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Icon} from 'react-fa';


class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
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

    OpenDropSignIn () {
        this.setState({active:!this.state.active});
    }

    SignOut () {
        this.props.SignOut();
    }

    render() {
        return (
           
            <div className="userinfo">
                <ul>
                    <li>
                        <div className="header-logo">
                            <img src="../../../../../public/img/header-logo.png" alt=""/>
                        </div>
                    </li>
                    <li>
                        <Link to={'#'}><Icon name="shopping-cart" /><span className="product-count">0</span></Link>
                    </li>
                    <li className="drop-btn">
                        <a href="javascript:" onClick={this.OpenDropSignIn.bind(this)}>
                            {this.props.userInfo.firstname}<Icon name="user" /><Icon className={`angle ${this.state.active? "active": ""}`} name="angle-down" />
                            {/*<Icon spin name="spinner" />*/}
                        </a>
                        <div className={`drop-sign-in ${this.state.active? "active": ""}`}>
                            <ul>
                                <li className="settings">
                                    <Link to={'/private/settings'}><button type="button"><Icon name="cogs" />Settings</button></Link>
                                </li>
                                <li className="sign-out">
                                    <button onClick={this.SignOut.bind(this)} type="button"><Icon name="sign-out"  />Sign out</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            
        );
    }
}

UserInfo.propTypes = {
   userInfo: PropTypes.object.isRequired,
   SignOut: PropTypes.func.isRequired,
};

export default UserInfo;