import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { startLogout } from '../actions/auth'

 export const Header = (props) => {
     console.log(props)
     return(
        <header>
    <h1>Expensify</h1>   
     <NavLink activeClassName = 'active' to = '/'>Home</NavLink>      
    <NavLink activeClassName = 'active' to = '/create'>Add Expense </NavLink>   
    <NavLink  activeClassName = 'active' to = '/help'>Help</NavLink>   
    <button onClick = {props.startLogout}>LogOut</button>
    <p>{props.name}</p>
    </header>
     )
     }
    


const mapDispatchToProps = () => ({
    startLogout : startLogout()
    
})

    


export default connect(mapDispatchToProps)(Header)