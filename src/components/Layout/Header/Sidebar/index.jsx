import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
        return (
            <div className="subMenu">
                <ul>
                    {
                        this.props.subMenuItem.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="subItemTitle">
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className="subItemImg">
                                        <img src={"../public/img/"+item.imgUrl} alt="flower"/>
                                    </div>
                                    <ul>
                                        {
                                            item.category.map((item2,index2) => {
                                                return (
                                                    <li key={index2}>
                                                        <Link to={item2.path} >
                                                            {item2.name}
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

Sidebar.propTypes = {
    subMenuItem: PropTypes.array.isRequired,
};

export default Sidebar;