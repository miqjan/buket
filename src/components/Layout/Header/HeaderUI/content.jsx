import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeadContent extends Component {
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
            <div className="header-content">
                <div className="header-menu">
                    <ul>
                        {this.props.menuItem.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={item.path} >{item.name}</Link>
                                </li>
                            );
                        },this)}
                       
                    </ul>
                </div>
            </div>
        );
    }
}

HeadContent.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    userInfo: PropTypes.object,
    menuItem: PropTypes.array.isRequired,
};

export default HeadContent;