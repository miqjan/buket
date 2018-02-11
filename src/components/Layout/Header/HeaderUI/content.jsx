import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';

import Login from './login.jsx';
import UserInfo from './userinfo.jsx';

import {SignIn, SignOut} from '../../../../actions/Auth';
import {getCategory} from '../../../../actions/Category';


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
        const menuItem = [
            {
                name:"Համաձայնագիր",
                path:"/pages/agreement",
            },
            {
                name:"Վճարում",
                path:"/pages/payment",
            },
            {
                name:"Առաքում",
                path:"/pages/delivery",
            },
            {
                name:"Մեր Մասին",
                path:"/pages/about_as",
            },
            {
                name:"Հարցեր",
                path:"/pages/questions",
            },
        ];
        
        return (
            <div className="header-content">
                <div className="header-wrap">
                    <div className="header-menu">
                        <ul>
                            {menuItem.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={item.path} >{item.name}</Link>
                                    </li>
                                );
                            },this)}
                            
                        </ul>
                    </div>
                        {
                            this.props.loading? <Icon style={{color:"white"}} name="circle-o-notch fa-spin fa-3x fa-fw"/>:
                            this.props.isSignIn? <UserInfo SignOut={this.props.SignOut} userInfo={this.props.data}/> : <Login SignIn = {this.props.SignIn}/>
                        }
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
    isSignIn: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object,
    // menuItem: PropTypes.array.isRequired,
    // subMenuItem: PropTypes.array.isRequired,
    SignOut: PropTypes.func,
    SignIn: PropTypes.func,
    getCategory: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        isSignIn: state.user.isSignIn,
        error: state.user.error,
        data: state.user.data,
        loading: state.user.loading,
        category: state.category,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        SignIn: (email, password) => dispatch ( SignIn( email, password ) ),
        SignOut: () => dispatch ( SignOut () ),
        getCategory: () => dispatch ( getCategory() )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeadContent);