import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Icon } from 'react-fa';
import config from '../../../../../config/index.json';

class Sidebar extends Component {
    constructor(props) {
        super(props);

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
        
        if(this.props.categorys.loading){
            return (
                <div className="subMenu">
                    <Icon style={{color:"white"}} name="circle-o-notch fa-spin fa-3x fa-fw"/>
                </div>
            );
        } else {
            return (
                <div className="subMenu">
                    <ul>
                        {
                            this.props.categorys.data.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <div className="subItemTitle">
                                            <h3>{item.name.en}</h3>
                                        </div>
                                        <div className="subItemImg">
                                            <img src={config.static_server_url + item.image_url} alt="flower"/>
                                        </div>
                                        <ul>
                                            {
                                                item.subCategories.map((item2,index2) => {
                                                    return (
                                                        <li key={index2}>
                                                            <Link to={"/categories/"+item2.url} >
                                                                {item2.name.en}
                                                            </Link>
                                                        </li>
                                                    )
                                                },this)
                                            }
                                        </ul>
                                    </li>  
                                )
                            },this)
                        }
                    </ul>
                </div>
            );
        }
       
    }
}

Sidebar.propTypes = {
    categorys: PropTypes.object.isRequired,
};

export default Sidebar;