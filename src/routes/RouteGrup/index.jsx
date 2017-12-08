import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Layout/Header/index.jsx';
import Footer from '../../components/Layout/Footer/index.jsx';
import Sidebar from '../../components/Layout/Sidebar/index.jsx';
import {Route} from 'react-router-dom';

class RouteGrup extends Component {
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
            <div>
            <Head isLogin={this.props.isLogin}/>
                <div className="customBody">
                    <Sidebar/>
                    <Route path={this.props.path}>
                        {this.props.children}
                    </Route>
                </div>
            <Footer/>
            </div>
        );
    }
}

RouteGrup.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

export default RouteGrup;