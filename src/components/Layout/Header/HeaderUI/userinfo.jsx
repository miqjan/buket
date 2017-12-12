import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
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
           
            <div className="userinfo">
                <ul>
                    <li>{this.props.userInfo.firstname}</li>
                    <li><img src='../../../../../public/img/avatar.png'/></li>
                </ul>
            </div>
            
        );
    }
}

UserInfo.propTypes = {
   userInfo: PropTypes.object.isRequired,
};

export default UserInfo;