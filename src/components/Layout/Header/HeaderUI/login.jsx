import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "", 
            error: null,
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

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    ClickSignIn(){
        if(this.state.email && this.state.password){
            this.props.SignIn(this.state.email, this.state.password);
        } else { 
            Alert.error('Email or password cannot be blank.');
            this.setState({'error':'Email or password cannot be blank.'});
        }
    }

    render() {
        return (
                
                <div className="login">
                    <ul>
                        <li><input onChange={this.handleChange.bind(this)} name="email"  type="text"/></li>
                        <li><input onChange={this.handleChange.bind(this)} name="password"  type="password"/></li>
                        <li><button onClick={this.ClickSignIn.bind(this)}>LogIn</button></li>
                    </ul>
                </div>
            
        );
    }
}

Login.propTypes = {
    SignIn: PropTypes.func,
};

export default Login;