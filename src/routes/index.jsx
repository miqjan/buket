import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-router-dom'
import PublicRoute from './PublicRoute/index.jsx';
import PrivateRoute from './PrivateRoute/index.jsx';
import RouteGrup from './RouteGrup/index.jsx';
import {Route, Redirect} from 'react-router-dom';

class Root extends Component {
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
        const isLogin = false;
        return (
            <Switch>
                <PrivateRoute isLogin={isLogin} path="/private">
                    <RouteGrup isLogin={isLogin}>
                        <Switch>
                            <Route path="/private/settings" render={()=>(<div>settings</div>)} />
                            <Route path="/private/delivery_book" render={()=>(<div>delivery_book</div>)} />
                            <Route path="/private/*" render={()=>(<div>not found</div>)}/>
                        </Switch>
                    </RouteGrup>
                </PrivateRoute>{/*redirict to'/' when is not login*/}
                <PublicRoute path="/">
                    <Switch>
                        <RouteGrup isLogin={isLogin} path="/pages">
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
                        <RouteGrup isLogin={isLogin} path="/categories" >
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

};

export default Root;