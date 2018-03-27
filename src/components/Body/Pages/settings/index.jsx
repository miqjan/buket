import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from '../../../../../config';
import { Icon } from 'react-fa';
import Modal from '../../../Layout/Modal/index.jsx';
import AccountSettings from './accountSettings.jsx';
import { UpdateProfile, getDeliveryBook, addDeliveryBook,
    updateDeliveryBook, deleteDeliveryBook } from '../../../../actions/Settings';
import { getRegions } from '../../../../actions/Shipping';
import translate from '../../../../translations';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: '',
            error : {},
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteDeliveryBook = this.deleteDeliveryBook.bind(this);
        this.addDeliveryBook = this.addDeliveryBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkValidation = this.checkValidation.bind(this);
        this.translate = translate(props.language);
    }

    componentWillMount() {
        this.props.getDeliveryBook();
        this.props.getRegions();
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
    addDeliveryBook(){
        const error = this.checkValidation(this.state);
        if(error.success){
            this.props.addDeliveryBook({...this.state,country: 'Armenia'});
        } else {
            this.setState({error});
        }
        
    }
    openModal(e) {
        const selectedObject = Object.assign({},this.props.delivery_book.find(obj => obj._id === e.target.dataset.id)); 
        selectedObject.region = selectedObject.region[0]._id;
        this.setState({
            modalActive: "active",
            updateDeliveryBook : selectedObject,
        })
    }

    closeModal() {
        this.setState({
            modalActive: "",
            updateDeliveryBook : null,
        });
    }

    deleteDeliveryBook(e){
        this.props.deleteDeliveryBook(e.target.dataset.id);
    }

    render() {
        const {delivery_book} = this.props;
        const {firstname, lastname, phone, country,
            region, city_village, address} = this.state;
        const {firstname: Rfirstname, lastname: Rlastname, phone: Rphone, country: Rcountry,
            region: Rregion, city_village: Rcity_village, address: Raddress} = this.state.error;
        return (
            <div className="settings">
                <div className="settings-title">
                    <h3>Settings: <span>{this.props.user.firstname + ' ' + this.props.user.lastname }</span></h3>
                </div>
                <AccountSettings language={this.props.language} 
                    user={this.props.user} 
                    UpdateProfile={this.props.UpdateProfile}
                />
                <div className="delivery-book">
                    <div className="settings-sub-title">
                        <h4>Delivery book</h4>
                    </div>
                    <div className="delivery-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Phone</th>
                                    <th>Region</th>
                                    <th>City or village</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {delivery_book && delivery_book.map((item,index)=>{
                                    return(
                                        <tr key={index} >
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.city_village}</td>
                                            <td>{item.region[0].name[this.props.language]}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <ul>
                                                    <li  >
                                                        <img data-id={item._id} onClick={this.openModal}  src="/public/fonts/edit.svg" alt="edit" />
                                                        <span>Edit</span>
                                                    </li>
                                                    <li >
                                                        <img data-id={item._id} onClick={this.deleteDeliveryBook} src="/public/fonts/remove.svg" alt="remove" />
                                                        <span>Remove</span>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })}                                
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="delivery-book-add" >
                    <hr/>
                    <div className={`form-group ${Rfirstname? "error": ""}`}>
                        <label htmlFor="add-f-name">Firstname</label>
                        <input type="text" name="firstname" onChange={this.handleChange} id="add-f-name" value={firstname || ''} />
                    </div>
                    <div className={`form-group ${Rlastname? "error": ""}`}>
                        <label htmlFor="add-l-name">Lastname</label>
                        <input type="text" name="lastname" onChange={this.handleChange} id="add-l-name" value={lastname || ''} />
                    </div>
                    <div className={`form-group ${Rphone? "error": ""}`}>
                        <label htmlFor="add-m-phone">Phone</label>
                        <input type="text" name="phone" onChange={this.handleChange} id="add-m-phone" value={phone || ''} />
                    </div>
                    <div className={`form-group ${Rregion? "error": ""}`}>
                        <label htmlFor="add-region">Region</label>
                        <select id="add-region" value={region} name="region" onChange={this.handleChange}>
                            <option value="" disabled selected>Select Region</option>
                            {this.props.regions.map((item,index)=>{
                                return (
                                    <option value={item._id} key={index} >{item.name[this.props.language]}</option>
                                );
                            })}
                        </select>
                        <span>${region? (this.props.regions.find(obj => obj._id === region)).price : '0'} </span>
                    </div>
                    <div className={`form-group ${Rcity_village? "error": ""}`}>
                        <label htmlFor="add-city">City</label>
                        <input type="text" onChange={this.handleChange} name="city_village" id="add-city" value={city_village || ''} />
                    </div>
                    <div className={`form-group ${Raddress? "error": ""}`}>
                        <label htmlFor="add-m-address">Address</label>
                        <textarea onChange={this.handleChange} name="address" value={address || ''} id="add-m-address"></textarea>
                    </div>
                    <div className="add-btn" >
                        <button onClick={this.addDeliveryBook} >Add</button>
                    </div>
                </div>
                <Modal 
                    language = {this.props.language}
                    modalClass={this.state.modalActive}
                    updateDeliveryBook_obj={this.state.updateDeliveryBook}
                    regions={this.props.regions}
                    parentSetState={this.closeModal}
                    updateDeliveryBook_func={this.props.updateDeliveryBook}
                />
            </div>
        );
    }
}

Settings.propTypes = {
    user: PropTypes.object,
    delivery_book: PropTypes.array,
    UpdateProfile : PropTypes.func,
    getDeliveryBook : PropTypes.func,
    addDeliveryBook : PropTypes.func,
    updateDeliveryBook : PropTypes.func,
    deleteDeliveryBook : PropTypes.func,
    getRegions : PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        user: state.user.data,
        delivery_book: state.user.delivery_book,
        regions: state.shipping.regions,
        language: state.language.location,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateProfile: (object) => dispatch(UpdateProfile(object)),
        getDeliveryBook: () => dispatch(getDeliveryBook()),
        addDeliveryBook: (object) => dispatch(addDeliveryBook(object)),
        updateDeliveryBook: (object) => dispatch(updateDeliveryBook(object)),
        deleteDeliveryBook: (id) => dispatch(deleteDeliveryBook(id)),
        getRegions: () => dispatch(getRegions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);