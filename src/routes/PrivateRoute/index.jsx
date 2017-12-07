import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
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
        return (
            <Route path={this.props.path}>
                {this.props.children}
            </Route>
        );
    }
}

PrivateRoute.propTypes = {

};

export default PrivateRoute;