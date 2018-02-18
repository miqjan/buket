import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setLanguage } from '../../../../actions/Language';
import translate from '../../../../translations';



class HeadTop extends Component {
    constructor(props) {
        super(props);
        this.setLocale = this.setLocale.bind(this);
        this.translate = translate(props.language);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.translate = translate(nextProps.language);
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

    setLocale(e) {
        
        this.props.setLanguage(e.target.id.toString());
       
    }

    render() {
        return (
            <div className="header-top">
                <div className="top-info">
                    <ul>
                        <li><a href="#">+374(96)669333</a></li>
                        <li>{this.translate.application.header.info}</li>
                    </ul>
                </div>
                <div className="top-language">
                    <ul>
                        <li id='ru' onClick={this.setLocale} >RU</li>
                        <li id='en' onClick={this.setLocale} >EN</li>
                        <li id='am' onClick={this.setLocale} >AM</li>
                    </ul>
                </div>
            </div>
        );
    }
}

HeadTop.propTypes = {
    setLanguage: PropTypes.func,
    language: PropTypes.string,
};
const mapStateToProps = (state) => {
    return {
        language: state.language.location, 
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage: (language) => dispatch ( setLanguage(language) )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeadTop);
