import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-fa';
import config from '../../../../../config';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changePassword: false,
            password: '',
            cnfirm_password: '',
            current_password: '',
            error: {},
        }
        this.toggleChengePassword = this.toggleChengePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    componentWillMount() {
        const {email: {address: email}, phone: {number: phone}, firstname, lastname} = this.props.user;
        this.setState({email, phone, firstname, lastname});
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
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value,
            error: this.checkValidation(Object.assign(this.state,{[e.target.name]: e.target.value}))});
    };
    toggleChengePassword() {
        if(this.state.changePassword){
            this.setState({
                password: '',
                cnfirm_password: '',
                changePassword: false,
            })
        } else {
            this.setState({
                changePassword: true,
            });
        }
    }
    updateProfile(){
        const error = this.checkValidation(this.state);
        if(error.success){
            const {
                current_password,
                password,
                cnfirm_password,
                firstname,
                lastname,
                phone,
            } = this.state;
            const data = {current_password, password, cnfirm_password,
                firstname, lastname, phone, };
            Object.keys(data).forEach((key) => (data[key] === '' || data[key] === undefined || data[key] === null) && delete data[key]);
            this.props.UpdateProfile(data);
            this.setState({current_password: ''});
        } else {
            this.setState({error});
        }
    }
    checkValidation(state){
        const {password, changePassword, cnfirm_password,
            firstname, lastname, phone, current_password} = state;
        const error = {success: true};
        const regexp = /^\(?\d{2,4}\)?[\d\-]{3,16}$/;
        if(changePassword && (password.length < 6 || password !== cnfirm_password)){
            error.password = true;
            error.success = false;
        } else {
            error.password = false;
        }
        if(firstname.length < 2){
            error.firstname = true;
            error.success = false;
        } else {
            error.firstname = false;
        }
        if(lastname.length < 2){
            error.lastname = true;
            error.success = false;
        } else {
            error.lastname = false;
        }
        if(!RegExp(regexp).test(phone)){
            error.phone = true;
            error.success = false;
        } else {
            error.phone = false;
        }
        if(current_password.length < 6){
            error.current_password = true;
            error.success = false;
        } else {
            error.current_password = false;
        }
        return error;
    }
    render() {
        const {password, firstname, lastname, phone, current_password, success} = this.state.error;
        return (
        <div className="account-settings">
            <div className="settings-sub-title">
                <h4>Account Setting</h4>
            </div>
            <div className="account-settings-data">
                <div className="form-group br">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" disabled="true" name="email" value={this.state.email} />
                </div>
                <div className={`form-group br ${phone? "error": ""}`} >
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </div>
                <div className={`form-group ${firstname? 'error' : ''}`}>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" id="firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                </div>
                <div className={`form-group ${lastname? 'error' : ''}`}>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                </div>
                <div className="change-password">
                    <div className={`pass-wrap ${this.state.changePassword ? 'active' : ''}`}>
                        <div className={`form-group pass ${password? 'error': ''}`}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className={`form-group con-pass ${password? 'error': ''}`}>
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input type="password" id="confirm-password" name="cnfirm_password" value={this.state.cnfirm_password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className={`open-btn ${this.state.changePassword ? 'closed' : ''}`} onClick={this.toggleChengePassword} >
                        <span>{this.state.changePassword ? <Icon name="angle-double-left" /> : 'Change password'}</span>
                    </div>
                </div>
                <hr />
                <div className={`form-group ${current_password? 'error': ''}`}>
                    <label htmlFor="current-password">Current password</label>
                    <input type="password" id="current-password" name="current_password" value={this.state.current_password} onChange={this.handleChange} />
                </div>
                <div className="save-btn">
                    <button onClick={this.updateProfile} >Save</button>
                </div>
            </div>
        </div>    
        );
    }
}

AccountSettings.propTypes = {
    user: PropTypes.object,
    UpdateProfile: PropTypes.func,
};


export default AccountSettings;