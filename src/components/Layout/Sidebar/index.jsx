import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
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
            <div className="customSidebar">
                <ul>
                    <li><Link to={`/categories/flowers`} >Flowers</Link></li>
                    <li><Link to={`/categories/funeral`} >Funeral</Link></li>
                    <li><Link to={`/categories/cakes`} >Cakes</Link></li>
                    <li><Link to={`/categories/drinks`} >Drinks</Link></li>
                    <li><Link to={`/categories/perfume`} >Perfume</Link></li>
                    <li><Link to={`/categories/phone`} >Phone</Link></li>
                </ul>
            </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;