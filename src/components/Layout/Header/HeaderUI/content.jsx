import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Icon} from 'react-fa';

import Login from './login.jsx';
import UserInfo from './userinfo.jsx';
import SubMenu from '../Sidebar/index.jsx';

class HeadContent extends Component {
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
            <div className="header-content">
                <div className="header-wrap">
                    <div className="header-menu">
                        <ul>
                            {this.props.menuItem.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={item.path} >{item.name}</Link>
                                    </li>
                                );
                            },this)}
                            <li className="dropDown">
                                <a href="#">Տեսականի <span><Icon name="angle-down" /></span></a>
                                <SubMenu subMenuItem={this.props.subMenuItem}/>
                            </li>

                        </ul>
                    </div>
                    {this.props.isLogin? <UserInfo userInfo={this.props.userInfo}/> : <Login clickFunction={''}/>}
                </div>
                <div className="container">
                    <div className="header-logo">
                        <img src="../../../../../public/img/header-logo.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

HeadContent.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    userInfo: PropTypes.object,
    menuItem: PropTypes.array.isRequired,
    subMenuItem: PropTypes.array.isRequired,
};

export default HeadContent;