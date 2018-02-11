
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';

import {getCategory} from '../../../actions/Category';
import InputRange from 'react-input-range';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                min: 5,
                max: 10,
            },

        }
    }

    componentWillMount() {
        this.props.getCategory();
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

    setActiveClass(e){
        console.log(e.target);
    }

    render() {
        if(this.props.category.data){
            return (     
                <div className="filter">
                    <div className="filter-menu">
                        <h3>Categories</h3>
                        <ul>
                            {this.props.category.data.map((item, index) => {
                                return(
                                    <li key={index} onClick={this.setActiveClass} >
                                        <h4>{item.name.en}</h4>
                                        <ul>
                                        {
                                            item.subCategories.map((item2,index2) => {
                                                return (
                                                    <li key={index2}>
                                                        <Link to={"/categories/"+item2._id} >
                                                            {item2.name.en}
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
                        <h3>Filters</h3>
                        <InputRange
                            allowSameValues
                            maxValue={20}
                            minValue={0}
                            formatLabel={value => `$ ${value}`}
                            value={this.state.value}
                            onChange={value => this.setState({ value: value })}
                            onChangeComplete={value => console.log(value)} />

                    </div>
                </div>
            )
        } else {
            return (<div>Loading... </div>); 
        }
       
    }
}

Category.propTypes = {
    getCategory: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        category: state.category,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCategory: () => dispatch ( getCategory() )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Category);



