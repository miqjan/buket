import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './item.jsx';


class List extends Component {
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
            <div className="advertising-list">
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}

export default List;