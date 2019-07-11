import React from 'react';
import { dispatch } from 'redux'
import { connect } from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import { startLogout } from '../actions/auth'

 export const Header = (props) => {
    
     return(
        <header>
    <Link to = '/dashboard'><h5>Expensify</h5></Link>
    <button onClick = {props.startLogout}>LogOut</button>
    <p>{props.name}</p>
    </header>
     )
     }
    


const mapDispatchToProps = (dispatch) => ({
    startLogout : () => dispatch(startLogout())
    
})

    


export default connect(undefined,mapDispatchToProps)(Header)