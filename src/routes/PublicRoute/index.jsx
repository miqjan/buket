import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

class PublicRoute extends Component {
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
            <Route path={this.props.path}>
                {this.props.children}
            </Route>
        );
    }
}

PublicRoute.propTypes = {

};

export default PublicRoute;