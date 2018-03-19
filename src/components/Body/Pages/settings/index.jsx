import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from '../../../../../config';
import { Icon } from 'react-fa';
import Modal from '../../../Layout/Modal/index.jsx';
import AccountSettings from './accountSettings.jsx';



class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changePassword: false,
            modalActive: '',
        }
        this.toggleChengePassword = this.toggleChengePassword.bind(this);
        this.openModal = this.openModal.bind(this);
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

    toggleChengePassword() {
        this.setState({
            changePassword: !this.state.changePassword,
        });
    }

    openModal() {
        this.setState({
            modalActive: "active",
        })
    }

    closeModal() {
        this.setState({
            modalActive: "",
        });
    }

    render() {
        return (
            <div className="settings">
                <div className="settings-title">
                    <h3>Settings: <span>{this.props.user.firstname + ' ' + this.props.user.lastname }</span></h3>
                </div>
                <AccountSettings user={this.props.user}/>
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
                                <tr>
                                    <td>
                                        Andranik
                                    </td>
                                    <td>
                                        Hakobqyoxvyan
                                    </td>
                                    <td>
                                        555555555
                                    </td>
                                    <td>
                                        Yerevan
                                    </td>
                                    <td>
                                        Yerevan
                                    </td>
                                    <td>
                                        address
                                    </td>
                                    <td>
                                        <ul>
                                            <li onClick={this.openModal} >
                                                <img src="/public/fonts/edit.svg" alt="edit" />
                                                <span>Edit</span>
                                            </li>
                                            <li>
                                                <img src="/public/fonts/remove.svg" alt="remove" />
                                                <span>Remove</span>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="delivery-book-add" >
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="add-f-name">Firstname</label>
                        <input type="text" id="add-f-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-l-name">Lastname</label>
                        <input type="text" id="add-l-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-m-phone">Phone</label>
                        <input type="text" id="add-m-phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-region">Region</label>
                        <select id="add-region">
                            <option>Yerevan</option>
                        </select>
                        <span>1000 AMD</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-city">City</label>
                        <input type="text" id="add-city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-m-address">Address</label>
                        <textarea id="add-m-address"></textarea>
                    </div>
                    <div className="add-btn">
                        <button>Add</button>
                    </div>
                </div>
                <Modal modalClass={this.state.modalActive} parentSetState={this.closeModal} />
            </div >
        );
    }
}

Settings.propTypes = {
    user: PropTypes.object
};
const mapStateToProps = (state) => {
    return {
        user: state.user.data
    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);