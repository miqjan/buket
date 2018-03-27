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
            error : {},
        };
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkValidation = this.checkValidation.bind(this);
        this.editDeliveryBook = this.editDeliveryBook.bind(this);
        this.closeModalbutton = this.closeModalbutton.bind(this);
    }

    componentWillMount() {
      
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.updateDeliveryBook_obj);
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
    closeModalbutton(){
        this.props.parentSetState();
    }
    handleChange(e) {
        const {[e.target.name]: error} = this.checkValidation(Object.assign(this.state,{[e.target.name]: e.target.value}))
        this.setState({[e.target.name]: e.target.value,
            error:Object.assign(this.state.error, {[e.target.name]: error}) });
    };
    checkValidation(state){
        const {firstname, lastname, phone, country,
            region, city_village, address} = state;
        const error = {success: true};
        const regexp = /^\(?\d{2,4}\)?[\d\-]{3,16}$/;
        phone
        if(!firstname || firstname.length < 2){
            error.firstname = true;
            error.success = false;
        } else {
            error.firstname = false;
        }
        if(!lastname || lastname.length < 2){
            error.lastname = true;
            error.success = false;
        } else {
            error.lastname = false;
        }
        if(!RegExp(regexp).test(phone && phone.replace(/ /g,''))){
            error.phone = true;
            error.success = false;
        } else {
            error.phone = false;
        }
        if(!region || region.length < 2){
            error.region = true;
            error.success = false;
        } else {
            error.region = false;
        }
        if(!city_village || city_village.length < 2){
            error.city_village = true;
            error.success = false;
        } else {
            error.city_village = false;
        }
        if(!address || address.length < 2){
            error.address = true;
            error.success = false;
        } else {
            error.address = false;
        }
        return error;
    }
    editDeliveryBook(){
        const error = this.checkValidation(this.state);
        if(error.success){
            this.props.updateDeliveryBook_func({...this.state,country: 'Armenia'});
            this.props.parentSetState();
        } else {
            this.setState({error});
        }
        
    }
    render() {
        if(!this.props.updateDeliveryBook_obj) return null;
        const {firstname, lastname, phone, country,
            region, city_village, address, delivery_book} = this.state;
        const {firstname: Rfirstname, lastname: Rlastname, phone: Rphone, country: Rcountry,
            region: Rregion, city_village: Rcity_village, address: Raddress} = this.state.error;
        return (
            <div className={`modal ${this.props.modalClass}`} onClick={this.closeModal} id="modalBack" >
                <div className="modal-content">
                    <div className={`form-group ${Rfirstname? "error": ""}`}>
                        <label htmlFor="f-name">Firstname</label>
                        <input type="text" id="f-name" onChange={this.handleChange} name="firstname" value={firstname || ''} />
                    </div>
                    <div className={`form-group ${Rlastname? "error": ""}`}>
                        <label htmlFor="l-name">Lastname</label>
                        <input type="text" id="l-name" onChange={this.handleChange} name="lastname" value={lastname || ''}/>
                    </div>
                    <div className={`form-group ${Rphone? "error": ""}`}>
                        <label htmlFor="m-phone">Phone</label>
                        <input type="text" id="m-phone" onChange={this.handleChange} name="phone" value={phone || ''}/>
                    </div>
                    <div className={`form-group ${Rregion? "error": ""}`}>
                        <label htmlFor="reg">Region</label>
                        <select id="add-region" value={region} name="region" onChange={this.handleChange}>
                        {this.props.regions.map((item,index)=>{
                            return (
                                <option value={item._id} key={index} >{item.name[this.props.language]}</option>
                            );
                        })}
                        </select>
                        <span>${region? (this.props.regions.find(obj => obj._id === region)).price : '0'} </span>
                    </div>
                    <div className={`form-group ${Rcity_village? "error": ""}`}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={this.handleChange} name="city_village" value={city_village || ''}/>
                    </div>
                    <div className={`form-group ${Raddress? "error": ""}`}>
                        <label htmlFor="m-address">Address</label>
                        <textarea id="m-address" name="address" onChange={this.handleChange} value={address || ''} ></textarea>
                    </div>
                    <div className="modal-btns">
                        <ul>
                            <li><button onClick={this.closeModalbutton} >Close</button></li>
                            <li className="save-btn"><button onClick={this.editDeliveryBook} >Save</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;