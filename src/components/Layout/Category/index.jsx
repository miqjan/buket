
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import Advertising from '../Advertising/list.jsx';

import {getCategory} from '../../../actions/Category';
import InputRange from 'react-input-range';
import translate from '../../../translations';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                min: 5,
                max: 10,
            },
            activeIndex: -1,
        }
        this.translate = translate(props.language);
    }

    componentWillMount() {
        this.props.getCategory();
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

    setActiveClass(e){
        if(this.state.activeIndex !== e.target.id)
            this.setState({activeIndex: e.target.id});
        else 
            this.setState({activeIndex: -1});
    }

    render() {
        if(this.props.category.data){
            return (     
                <div className="filter">
                    <div className="filter-menu">
                        <h3>{this.translate.application.category.name}</h3>
                        <ul>
                            {this.props.category.data.map((item, index) => {
                                return(
                                    <li key={index}  >
                                        <h4 id={index}  onClick={this.setActiveClass.bind(this)} >{item.name[this.props.language]}</h4>
                                        <ul className={index === +this.state.activeIndex? 'active':''}>
                                        {
                                            item.subCategories.map((item2,index2) => {
                                                return (
                                                    <li key={index2}>
                                                        <Link to={"/categories/"+item2._id} >
                                                            {item2.name[this.props.language]}
                                                        </Link>
                                                    </li>
                                                )
                                            },this)
                                        }
                                        </ul>
                                    </li>  
                                );
                            },this)}
                        </ul>
                    </div>
                    <div className="filter-slide">
                        <h3>{this.translate.application.category.filter}</h3>
                        <InputRange
                            allowSameValues
                            maxValue={20}
                            minValue={0}
                            formatLabel={value => `$ ${value}`}
                            value={this.state.value}
                            onChange={value => this.setState({ value: value })}
                            onChangeComplete={value => console.log(value)} />

                    </div>
                    <Advertising />   
                </div>
            )
        } else {
            return (<div>Loading... </div>); 
        }
       
    }
}

Category.propTypes = {
    getCategory: PropTypes.func,
    language: PropTypes.string,
};
const mapStateToProps = (state) => {
    return {
        category: state.category,
        language: state.language.location,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCategory: () => dispatch ( getCategory() )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Category);



