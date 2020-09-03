import React from 'react'
import {NavLink} from 'react-router-dom'

const navigationItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" 
                to={props.path}
                exact={props.exact}
                activeClassName="active">
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem;