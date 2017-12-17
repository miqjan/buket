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
                    <div className="container">
                        <HeadTop />
                    </div>
                </div>
                <HeadContent 
                    isSignIn={this.props.isSignIn} 
                    userInfo={this.props.userInfo} 
                    menuItem={this.props.menuItem} 
                    subMenuItem={this.props.subMenuItem}
                    SignIn = {this.props.SignIn} 
                />
            </header>
        );
    }
}

Head.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    userInfo: PropTypes.object,
    menuItem: PropTypes.array.isRequired,
    subMenuItem: PropTypes.array.isRequired,
    SignIn: PropTypes.func,
};

export default Head;