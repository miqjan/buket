import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';
class PrivateRoute extends Component {
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

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        if(this.props.isSignIn)
        {
            return (
                <Route path={this.props.path}>
                    {this.props.children}
                </Route>
            );
        } else {
            return(<Redirect to={{ pathname: '/categories/flowers',}}/>);
        }
    }
}

PrivateRoute.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
};

export default PrivateRoute;