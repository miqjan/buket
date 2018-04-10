import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';



import Login from './login.jsx';
import UserInfo from './userinfo.jsx';

import {SignIn, SignOut} from '../../../../actions/Auth';
import {getCategory} from '../../../../actions/Category';
import translate from '../../../../translations';


class HeadContent extends Component {
    constructor(props) {
        super(props);
        this.translate = translate(props.language);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.translate = translate(nextProps.language);
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
                name: this.translate.application.header.pages.agreement,
                path:"/pages/agreement",
            },
            {
                name: this.translate.application.header.pages.payment,
                path:"/pages/payment",
            },
            {
                name: this.translate.application.header.pages.delivery,
                path:"/pages/delivery",
            },
            {
                name: this.translate.application.header.pages.about_as,
                path:"/pages/about_as",
            },
            {
                name: this.translate.application.header.pages.questions,
                path:"/pages/questions",
            },
        ];
        
        return (
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
                <div className="header-sing-menu">
                    <ul>
                        <li>
                            <div className="header-logo">
                                <img src="../../../../../public/img/header-logo.png" alt="Buket"/>
                            </div>
                        </li>
                        <li>
                            <Link to={'/pages/shopping-cart'}><Icon name="shopping-cart" /><span className="product-count">{this.props.card.products.length}</span></Link>
                        </li>
                        <li>
                            {
                                this.props.loading? <Icon style={{color:"white"}} name="circle-o-notch fa-spin fa-3x fa-fw"/>:
                                this.props.isSignIn? <UserInfo SignOut={this.props.SignOut} userInfo={this.props.data} translate={this.translate}/> :
                                <Login SignIn = {this.props.SignIn} translate={this.translate}/>
                            }
                        </li>
                    
                    </ul>
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
    language: PropTypes.string,
};
const mapStateToProps = (state) => {
    return {
        isSignIn: state.user.isSignIn,
        error: state.user.error,
        data: state.user.data,
        loading: state.user.loading,
        category: state.category,
        language: state.language.location,
        card : state.card,
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