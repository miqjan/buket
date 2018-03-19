import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from '../../../../config';
import { Icon } from 'react-fa';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.closeModal = this.closeModal.bind(this);
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

    closeModal (e){
        if(e.target.id === "modalBack"){
            this.props.parentSetState();
        }
    }

    render() {
        return (
            <div className={`modal ${this.props.modalClass}`} onClick={this.closeModal} id="modalBack" >
                <div className="modal-content">
                    <div className="form-group">
                        <label htmlFor="f-name">Firstname</label>
                        <input type="text" id="f-name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="l-name">Lastname</label>
                        <input type="text" id="l-name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="m-phone">Phone</label>
                        <input type="text" id="m-phone"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg">Region</label>
                        <select id="reg">
                            <option>Yerevan</option>
                        </select>
                        <span>1000 AMD</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="m-address">Address</label>
                        <textarea id="m-address"></textarea>
                    </div>
                    <div className="modal-btns">
                        <ul>
                            <li><button>Close</button></li>
                            <li className="save-btn"><button>Save</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;