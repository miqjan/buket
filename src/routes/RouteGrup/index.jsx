import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Layout/Header/index.jsx';
import Slider from '../../components/Layout/Slider/index.jsx';
import Footer from '../../components/Layout/Footer/index.jsx';
import Advertising from '../../components/Layout/Advertising/list.jsx';
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
                <Head />
                <Slider />
                <div className="customBody container">
                    <Route path={this.props.path}>
                        {this.props.children}
                    </Route>
                    <Advertising />                    
                </div>
                <Footer />
            </div>
        );
    }
}

RouteGrup.propTypes = {
   
};

export default RouteGrup;