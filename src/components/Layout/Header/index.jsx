import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div className="customHead">
                <h1>HEADER {this.props.isLogin? "Login":""}</h1>
                
            </div>
        );
    }
}

Head.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

export default Head;