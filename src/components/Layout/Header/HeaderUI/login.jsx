import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends Component {
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
           
                <div className="login">
                    <ul>
                        <li><input type="text"/></li>
                        <li><input type="password"/></li>
                        <li><button>LogIn</button></li>
                    </ul>
                </div>
            
        );
    }
}

Login.propTypes = {
   
};

export default Login;