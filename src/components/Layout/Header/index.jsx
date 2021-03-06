import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadTop from './HeaderUI/top.jsx';
import HeadContent from './HeaderUI/content.jsx';


class Head extends Component {
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
            <header>
                <div className="pre-header">
                    <div className="main-container">
                        <HeadTop />
                    </div>
                    <div className="header-content">
                        <div className="main-container">
                            <HeadContent />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Head.propTypes = {};

export default Head;