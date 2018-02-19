import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getProducts } from '../../../actions/Product'
import { addItem, removeItem } from '../../../actions/Card';

import Item from './item.jsx';
import translate from '../../../translations';




class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit : 12,
        }
        this.translate = translate(props.language);
    }

    componentWillMount() {
               
    }

    componentDidMount() {
        this.props.getProducts( this.props.match.params.categories, this.state.limit );
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
        if( ( this.props.match.params.categories !== prevProps.match.params.categories )||
            this.state.limit !== prevState.limit ){

            this.props.getProducts( this.props.match.params.categories, this.state.limit );

            if( this.props.match.params.categories !== prevProps.match.params.categories ){
                this.setState( {limit : 12} );
            }
        }
    }

    componentWillUnmount() {

    }
    addLimit(){
        this.setState({
            limit : this.state.limit + 8,
        });
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
                                return (<Item key={index} product={product} translate={this.translate} card={{
                                    add: this.props.addItem,
                                    remove: this.props.removeItem,
                                }}/>)
                            },this)
                        }
                        {!this.props.notMore && (<div className="mor-products">
                            <a href="javascript:"  onClick={this.addLimit.bind(this)} >{this.translate.application.product.more}</a>
                        </div>)}
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
    language: PropTypes.string,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        error: state.products.error,
        data: state.products.data,
        notMore : state.products.notMore,
        loading: state.products.loading,
        language: state.language.location,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (categoyId, limit) =>  dispatch ( getProducts(categoyId, limit) ),
        addItem : (id) => dispatch(addItem(id)),
        removeItem: (id) => dispatch(removeItem(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);