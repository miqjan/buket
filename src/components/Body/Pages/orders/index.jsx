import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
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
            <div className="orders">
                <div className="orders-title">
                    <h2>Previous order list</h2>
                </div>
                <div className="orders-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Price</th>
                                <th>Delivery date</th>
                                <th>Create date</th>                                                                
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Orders.propTypes = {

};
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);