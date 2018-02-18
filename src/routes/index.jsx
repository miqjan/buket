import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Switch, withRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import PublicRoute from './PublicRoute/index.jsx';
import PrivateRoute from './PrivateRoute/index.jsx';
import RouteGrup from './RouteGrup/index.jsx';

import {IsSignIn} from '../actions/Auth';

import ProductList from '../components/Body/Product/table.jsx';


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
        return (
            <Switch>
                <PrivateRoute isSignIn={this.props.isSignIn} path="/private">
                    <RouteGrup>
                        <Switch>
                            <Route path="/private/settings" render={()=>(<div>settings</div>)} />
                            <Route path="/private/delivery_book" render={()=>(<div>delivery_book</div>)} />
                            <Route path="/private/*" render={()=>(<div>not found</div>)}/>
                        </Switch>
                    </RouteGrup>
                </PrivateRoute>
                <PublicRoute path="/">
                    <Switch>
                        {/* <RouteGrup path="/pages" exect>
                            <Switch>
                                <Route path="/pages/:page" render={()=>(<div>ABOUT US</div>)}/>
                                {/* <Route path="/pages/questions" render={()=>(<div>QUESTIONS</div>)}/>
                                <Route path="/pages/delivery" render={()=>(<div>DELIVERY</div>)}/>
                                <Route path="/pages/agreement" render={()=>(<div>AGREEMENT</div>)}/>
                                <Route path="/pages/payment" render={()=>(<div>PAYMENT</div>)}/>
                                <Route path="/pages/*" render={()=>(<div>not found</div>)}/>
                                <Redirect exact from="/pages" to={{ pathname: '/pages/payment',}}/
                            </Switch>
                        </RouteGrup> */}
                        <RouteGrup path="/pages">
                            <Switch>
                                <Route path="/pages/:page" render={()=>(<div>ABOUT US</div>)}/>
                                {/* <Route path="/pages/questions" render={()=>(<div>QUESTIONS</div>)}/>
                                <Route path="/pages/delivery" render={()=>(<div>DELIVERY</div>)}/>
                                <Route path="/pages/agreement" render={()=>(<div>AGREEMENT</div>)}/>
                                <Route path="/pages/payment" render={()=>(<div>PAYMENT</div>)}/>
                                <Route path="/pages/*" render={()=>(<div>not found</div>)}/>
                                <Redirect exact from="/pages" to={{ pathname: '/pages/payment',}}/> */}
                            </Switch>
                        </RouteGrup>
                        <RouteGrup path="/categories">
                            <Switch>
                                <Route path="/categories/:categories/:subcategories?" component={ProductList} />
                                {/* <Route path="/categories/funeral" render={()=>(<div>Funeral</div>)}/>
                                <Route path="/categories/cakes" render={()=>(<div>Cakes</div>)}/>
                                <Route path="/categories/drinks" render={()=>(<div>Drinks</div>)}/>
                                <Route path="/categories/perfume" render={()=>(<div>Perfume</div>)}/>
                                <Route path="/categories/phone" render={()=>(<div>Phone</div>)}/>
                                <Route path="/categories/*" render={()=>(<div>Not found</div>)}/> */}
                                
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
        IsSignIn: () =>  dispatch ( IsSignIn() )
    };
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Root) );