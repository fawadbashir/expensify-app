import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
    
    <h1>Expensify</h1>
    
     <nav>
    <ul>
    <li>
     <NavLink activeClassName = 'active' to = '/'>Home</NavLink>
    </li>
    <li>
    <NavLink activeClassName = 'active' to = '/create'>Add Expense </NavLink>
     </li>
    {/* <li> 
    <NavLink  activeClassName = 'active' to = '/edit'>Edit Expense</NavLink>
   </li> */}
    <li> 
    <NavLink  activeClassName = 'active' to = '/help'>Help</NavLink>
    </li>
    </ul>
    </nav> 
    </header>
)

export default Header