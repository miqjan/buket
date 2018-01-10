import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';

import Login from './login.jsx';
import UserInfo from './userinfo.jsx';
import SubMenu from '../Sidebar/index.jsx';

import {SignIn} from '../../../../actions/Auth';

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
        
        const subMenuItem = [
            {
                name: "Ծաղիկներ",
                imgUrl: "category1.jpg",
                category: [
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Զամբյուղներ",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Կոմպոզիցիա",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Հոլանդական",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Վարդ",
                        path: "/categories/flowers",
                    },
                ],
            },
            {
                name: "Սգո",
                imgUrl: "category1.jpg",
                category: [
                    {
                        name: "Պսակ",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Զամբյուղներ",
                        path: "/categories/flowers",
                    },
                ],
            },
            {
                name: "Տորթեր",
                imgUrl: "category2.jpg",
                category: [
                    {
                        name: "Սիրային",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Նոր Տարի",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Ծննդյան",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Մկրտության",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Մանկական",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Դասական",
                        path: "/categories/flowers",
                    },
                ],
            },
            {
                name: "Խմիչքներ",
                imgUrl: "category3.jpg",
                category: [
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                ],
            },
            {
                name: "Ծաղիկներ",
                imgUrl: "category1.jpg",
                category: [
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                ],
            },
            {
                name: "Ծաղիկներ",
                imgUrl: "category1.jpg",
                category: [
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                    {
                        name: "Ծաղկեփնջեր",
                        path: "/categories/flowers",
                    },
                ],
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
                            <li className="dropDown">
                                <a href="javascript:">Տեսականի <span><Icon name="angle-down" /></span></a>
                                <SubMenu subMenuItem={subMenuItem}/>
                            </li>

                        </ul>
                    </div>
                    {
                        this.props.loading? <Icon style={{color:"white"}} name="circle-o-notch fa-spin fa-3x fa-fw"/>:
                        this.props.isSignIn? <UserInfo userInfo={this.props.data}/> : <Login SignIn = {this.props.SignIn}/>}
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
    SignIn: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        isSignIn: state.user.isSignIn,
        error: state.user.error,
        data: state.user.data,
        loading: state.user.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        SignIn: (email, password) => dispatch ( SignIn( email, password ) ),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeadContent);