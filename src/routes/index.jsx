import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import PublicRoute from './PublicRoute/index.jsx';
import PrivateRoute from './PrivateRoute/index.jsx';
import RouteGrup from './RouteGrup/index.jsx';

import {IsSignIn, SignIn} from '../actions/Auth';


class Root extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.IsSignIn();
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
        const userInfo = {
            firstname: "Test",
            lastname: "Tester",
        };
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
            <Switch>
                <PrivateRoute isSignIn={this.props.isSignIn} path="/private">
                    <RouteGrup isSignIn={this.props.isSignIn} menuItem={menuItem} subMenuItem={subMenuItem} userInfo={userInfo}>
                        <Switch>
                            <Route path="/private/settings" render={()=>(<div>settings</div>)} />
                            <Route path="/private/delivery_book" render={()=>(<div>delivery_book</div>)} />
                            <Route path="/private/*" render={()=>(<div>not found</div>)}/>
                        </Switch>
                    </RouteGrup>
                </PrivateRoute>{/*redirict to'/' when is not login*/}
                <PublicRoute path="/">
                    <Switch>
                        <RouteGrup 
                            
                            isSignIn = {this.props.isSignIn} 
                            menuItem = {menuItem}  
                            subMenuItem = {subMenuItem} 
                            userInfo = {userInfo} 
                            SignIn = {this.props.SignIn}
                            path="/pages"
                        >
                            <Switch>
                                <Route path="/pages/about_as" render={()=>(<div>ABOUT US</div>)}/>
                                <Route path="/pages/questions" render={()=>(<div>QUESTIONS</div>)}/>
                                <Route path="/pages/delivery" render={()=>(<div>DELIVERY</div>)}/>
                                <Route path="/pages/agreement" render={()=>(<div>AGREEMENT</div>)}/>
                                <Route path="/pages/payment" render={()=>(<div>PAYMENT</div>)}/>
                                <Route path="/pages/*" render={()=>(<div>not found</div>)}/>
                                <Redirect exact from="/pages" to={{ pathname: '/pages/payment',}}/>
                            </Switch>
                        </RouteGrup>
                        <RouteGrup 
                            
                            isSignIn={this.props.isSignIn}
                            menuItem={menuItem} 
                            subMenuItem={subMenuItem} 
                            userInfo={userInfo} 
                            SignIn = {this.props.SignIn}
                            path="/categories" 
                        >
                            <Switch>
                                <Route exact path="/categories/flowers" render={()=>(<div>Flowers</div>)} />
                                <Route path="/categories/funeral" render={()=>(<div>Funeral</div>)}/>
                                <Route path="/categories/cakes" render={()=>(<div>Cakes</div>)}/>
                                <Route path="/categories/drinks" render={()=>(<div>Drinks</div>)}/>
                                <Route path="/categories/perfume" render={()=>(<div>Perfume</div>)}/>
                                <Route path="/categories/phone" render={()=>(<div>Phone</div>)}/>
                                <Route path="/categories/*" render={()=>(<div>Not found</div>)}/>
                                <Redirect exact from="/categories" to={{ pathname: '/categories/flowers',}}/>
                            </Switch>
                        </RouteGrup>
                        <Redirect to={{ pathname: '/categories/flowers',}}/>
                    </Switch>
                    
                </PublicRoute>

               
                
		    </Switch>
        );
    }
}

Root.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    data: PropTypes.object,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
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
        IsSignIn: () =>  dispatch ( IsSignIn() ),
        SignIn: (email, password) => dispatch ( SignIn( email, password ) ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);