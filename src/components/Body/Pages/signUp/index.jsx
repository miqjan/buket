import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <div className="sign-up">
                <div className="form-block">
                    <div className="form-group">
                        <input type="text" placeholder="First Name" name="firstName" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" name="lastName" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Phone" name="phone" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm password" name="password" />
                    </div>
                    <div className="form-brn">
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {
};
const mapStateToProps = (state) => {
    return {
        language: state.language.location,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
