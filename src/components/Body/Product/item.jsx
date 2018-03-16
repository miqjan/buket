import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import config from '../../../../config';
import { withRouter } from 'react-router-dom';


class Item extends Component {
    constructor(props) {
        super(props);
        this.addToCard = this.addToCard.bind(this);
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

    addToCard(e) {
        this.props.card.add(e.target.dataset.id, e.target.dataset.imgurl, e.target.dataset.price);
    }

    render() {
        return (
            <div className="product-item">
                <Link to={"/products/"+this.props.product._id} >
                <img src={config.static_server_url+this.props.product.image_url} alt=""/>
                </Link>
                <div className="product-hover">
                    <div className="hover-content">
                    <div className="product-price">
                            <h5>${this.props.product.price}</h5>
                    </div>
                        <div className="product-trash">
                            <a href="javascript:" data-id={this.props.product._id}
                            data-imgurl={this.props.product.image_url}
                            data-price={this.props.product.price}
                            onClick={this.addToCard} >{this.props.translate.application.product.add_card}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Item.propTypes = {
    product : PropTypes.object.isRequired,
    translate: PropTypes.object.isRequired,
    card: PropTypes.object, 
}

export default Item;