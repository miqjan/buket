import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Check from './check.jsx';
import * as _ from 'lodash';
import { getDeliveryBook } from '../../../../actions/Settings';
import { getRegions, setSelected } from '../../../../actions/Shipping';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone';

class Shipping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {},
            delivery_book_select: "default",
            region: "default",
            startDate: moment().add(1,'day').tz('Asia/Yerevan').startOf('day'),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.checkValidation = this.checkValidation.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount() {
        if(this.props.selected){
            this.setState(this.props.selected);
        }
        if (!this.props.delivery_book) {
            this.props.getDeliveryBook();
        }
        if(_.isEmpty(this.props.regions)){
            this.props.getRegions();            
        }

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
    handleChangeDate(date) {
        this.setState({
          startDate: date
        });
    }
    handleChange(e) {
        if(e.target.name === 'delivery_book_select'){
            const {_id, ...selectedDeliveryBook} = Object.assign({},this.props.delivery_book.find(obj => obj._id === e.target.value));
            error = this.checkValidation(selectedDeliveryBook);
            error.region = false;
            this.setState({[e.target.name]: e.target.value, ...selectedDeliveryBook,error});

        } else {
            var {[e.target.name]: error} = this.checkValidation(Object.assign(this.state,{[e.target.name]: e.target.value}))
            this.setState({[e.target.name]: e.target.value,
                error:Object.assign(this.state.error, {[e.target.name]: error})});
        }
        
    };
    next(){
        const temp = JSON.parse(JSON.stringify(this.state));
        if(_.isArray(this.state.region)){
            temp.region = temp.region[0]._id
        }
        const error = this.checkValidation(temp);
        if(error.success){
            const {error, ...toSave} = temp;
            toSave.startDate = this.state.startDate;// when comeback to this page  startDate.format error
            this.props.setSelected(toSave);
            this.props.history.push('/private/billing');
        } else {
            this.setState({error});
        }
    
    }
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
        if(!region || region === 'default' || region.length < 2){
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
    render() {
        const {delivery_book} = this.props;
        const {firstname, lastname, phone, country,
            region, city_village, address} = this.state;
        const {firstname: Rfirstname, lastname: Rlastname, phone: Rphone, country: Rcountry,
            region: Rregion, city_village: Rcity_village, address: Raddress} = this.state.error;
        const momentObj = moment();
        return (
            <div className="shipping">
                <div className="step">
                    <ul>
                        <li>
                            <Link to="/pages/shopping-cart">
                                <span className="step-item">1</span>
                            </Link>
                            ordering
                            </li>
                        <li className="active">
                            <span className="step-item">2</span>
                            shipping
                            </li>
                        <li>
                            <span className="step-item">3</span>
                            billing
                            </li>
                    </ul>
                </div>
                <div className="shipping-content">
                    <div className="select-delivery">
                        <select name="delivery_book_select" onChange={this.handleChange} value={this.state.delivery_book_select} >
                            <option value='default' disabled={true} >select book</option>
                            {
                                this.props.delivery_book && this.props.delivery_book.map((item, index) => {
                                    
                                    return (
                                        <option value={item._id} key={index}>
                                            {`${item.firstname}, ${item.lastname}, ${item.city_village}, ${item.address},       ${item.region[0].name[this.props.language]} - $${item.region[0].price}`}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="delivery-form">
                        <div className="delivery-book-add" >
                            <div className={`form-group ${Rfirstname ? "error" : ""}`}>
                                <label htmlFor="add-f-name">Firstname</label>
                                <input type="text" name="firstname" onChange={this.handleChange} id="add-f-name" value={firstname || ''} />
                            </div>
                            <div className={`form-group ${Rlastname ? "error" : ""}`}>
                                <label htmlFor="add-l-name">Lastname</label>
                                <input type="text" name="lastname" onChange={this.handleChange} id="add-l-name" value={lastname || ''} />
                            </div>
                            <div className={`form-group ${Rphone ? "error" : ""}`}>
                                <label htmlFor="add-m-phone">Phone</label>
                                <input type="text" name="phone" onChange={this.handleChange} id="add-m-phone" value={phone || ''} />
                            </div>
                            <div className={`form-group ${Rregion ? "error" : ""}`}>
                                <label htmlFor="add-region">Region</label>
                                <select id="add-region" value={ _.isArray(region)? region[0]._id: region } name="region" onChange={this.handleChange} >
                                    <option value="default" disabled >Select Region</option>
                                    {this.props.regions.map((item, index) => {
                                        return (
                                            <option value={item._id} key={index} >{item.name[this.props.language]}</option>
                                        );
                                    })}

                                </select>
                                <span>${(region !== 'default' )? (  _.isArray(region)?  region[0].price : (this.props.regions.find(obj => obj._id === region)).price) : ("0") } </span>
                            </div>
                            <div className={`form-group ${Rcity_village ? "error" : ""}`}>
                                <label htmlFor="add-city">City</label>
                                <input type="text" onChange={this.handleChange} name="city_village" id="add-city" value={city_village || ''} />
                            </div>
                            <div className={`form-group ${Raddress ? "error" : ""}`}>
                                <label htmlFor="add-m-address">Address</label>
                                <textarea onChange={this.handleChange} name="address" value={address || ''} id="add-m-address"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="datetime-wrapp">
                        <div className="datetime-item">
                            <DatePicker
                                inline
                                utcOffset={4}
                                showTimeSelect
                                onChange={this.handleChangeDate}
                                selected={this.state.startDate}
                                timeIntervals={60}
                                minDate={moment().add(1,'day').tz('Asia/Yerevan')}
                                excludeTimes={[moment().hours(1).minutes(0), moment().hours(2).minutes(0), moment().hours(3).minutes(0), moment().hours(4).minutes(0), moment().hours(5).minutes(0), moment().hours(6).minutes(0), moment().hours(7).minutes(0)]}
                            />
                        </div>
                        <div className="datetime-info">
                            <div className="datatime-info-content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            </div>
                            <div className='datatime-input' >
                                <input type="text" readOnly value={this.state.startDate.format('YYYY-MM-DD HH:mm')} />
                            </div>
                        </div>
                    </div>
                    <div className="next-btn">
                        <button onClick={this.next} >next</button>
                    </div>
                </div>
                
                <Check products={this.props.card.products} shipping={
                    (region !== 'default' )? (  _.isArray(region)?  region[0] : this.props.regions.find(obj => obj._id === region) ) : null
                } language={this.props.language} />
            </div>
        );
    }
}

Shipping.propTypes = {
    language: PropTypes.string,
    card: PropTypes.object,
    delivery_book: PropTypes.array,
    getRegions: PropTypes.func,
    setSelected: PropTypes.func,   
};
const mapStateToProps = (state) => {
    return {
        language: state.language.location,
        card: state.card,
        delivery_book: state.user.delivery_book,
        regions: state.shipping.regions,
        selected: state.shipping.select,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDeliveryBook: () => dispatch(getDeliveryBook()),
        getRegions: () => dispatch(getRegions()),
        setSelected: (obj) => dispatch(setSelected(obj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);