import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Layout/Header/index.jsx';
import Footer from '../../components/Layout/Footer/index.jsx';
import {Route} from 'react-router-dom';

class RouteGrup extends Component {
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
            <div>
            <Head 
                isSignIn={this.props.isSignIn} 
                menuItem={this.props.menuItem} 
                subMenuItem={this.props.subMenuItem} 
                userInfo={this.props.userInfo}
                SignIn = {this.props.SignIn} 
            />
            <div className="customBody">
                
                <Route path={this.props.path}>
                    {this.props.children}
                </Route>
            </div>
            <Footer/>
            </div>
        );
    }
}

RouteGrup.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    userInfo: PropTypes.object,
    menuItem: PropTypes.array.isRequired,
    subMenuItem: PropTypes.array.isRequired,
    SignIn: PropTypes.func,
};

export default RouteGrup;