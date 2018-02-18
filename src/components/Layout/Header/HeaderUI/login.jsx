import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';
import {Icon} from 'react-fa';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "", 
            error: null,
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
    
    OpenDropSignIn () {
        this.setState({active:!this.state.active});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.ClickSignIn();
        }
    }
    render() {
        return (
                
                <div className="login">
                    <ul>
                        <li>
                            <div className="header-logo">
                                <img src="../../../../../public/img/header-logo.png" alt=""/>
                            </div>
                        </li>
                        <li><Link to={'#'}>{this.props.translate.application.header.auth.sign_up}</Link></li>
                        <li className="drop-btn">
                            <a href="javascript:" className={this.state.active? "active": ""} onClick={this.OpenDropSignIn.bind(this)} >{this.props.translate.application.header.auth.sign_in}</a>
                            <div className={`drop-sign-in ${this.state.active? "active": ""}`}>
                                <ul>
                                    <form >
                                        <li>
                                            <input onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} name="email"  type="text" placeholder="E-mail"/>
                                        </li>
                                        <li>
                                            <input onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} name="password"  type="password" placeholder="Password"/>
                                        </li>
                                        <li className="sign-in">
                                            <button type="button"  onClick={this.ClickSignIn.bind(this)}><Icon name="sign-in" />{this.props.translate.application.header.auth.sign_in}</button>
                                        </li>
                                        <li className="fb-sign-in">
                                            <button type="button">Facebook</button>
                                        </li>
                                    </form>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            
        );
    }
}


export default Login;