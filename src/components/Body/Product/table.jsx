import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getProducts } from '../../../actions/Product'

import Item from './item.jsx';


class Table extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getProducts(this.props.match.params.categories);
               
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
        if(this.props.loading){
            return (
                <div className="product-wrap">
                    <div className="product-table">
                       Loading...
                    </div>
                </div>
            );
        } else {
            return (
                <div className="product-wrap">
                    <div className="product-table">
                        {
                            this.props.data.map(( product, index )=>{
                                return (<Item key={index} product={product}/>)
                            },this)
                        }
                    </div>
                </div>
            );
        }
        
    }
}
Table.propTypes = {
    getProducts : PropTypes.func.isRequired,
    data: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
    return {
        error: state.products.error,
        data: state.products.data,
        loading: state.products.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (categoyId) =>  dispatch ( getProducts(categoyId) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);