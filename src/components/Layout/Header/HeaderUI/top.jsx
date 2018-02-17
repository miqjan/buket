import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeadTop extends Component {
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
            <div className="header-top">
                <div className="top-info">
                    <ul>
                        <li><a href="#">+374(96)669333</a></li>
                        <li>Օնլայն խանութ Հայաստանում 24 ժամ</li>
                    </ul>
                </div>
                <div className="top-language">
                    <ul>
                        <li>RU</li>
                        <li>EN</li>
                        <li>AM</li>
                    </ul>
                </div>
            </div>
        );
    }
}

HeadTop.propTypes = {
    
};

export default HeadTop;