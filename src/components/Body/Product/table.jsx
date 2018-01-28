import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './item.jsx';


class Table extends Component {
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
            <div className="product-wrap">
                <div className="product-table">
                {this.props.match.params.categories}
                {this.props.match.params.subcategories}
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        );
    }
}

export default Table;