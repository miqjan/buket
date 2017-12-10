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
                <div className="container">
                    <HeadTop />
                </div>
                <HeadContent isLogin={this.props.isLogin} /*userInfo={this.props.userInfo}*/ menuItem={this.props.menuItem} />
            </header>
        );
    }
}

Head.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    userInfo: PropTypes.object,
    menuItem: PropTypes.array.isRequired,
};

export default Head;