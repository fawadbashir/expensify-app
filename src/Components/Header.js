import React from 'react';
// import { dispatch } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

export const Header = (props) => {
    console.log(props.name)
    return (

        <div className="navbar-fixed">
            <nav className='grey darken-3'>
                <div className='container'>
                    <div className="nav-wrapper">
                        <Link to='/dashboard' className="brand-logo left">Logo</Link>
                        <ul className="right">
                            <li><button className='btn btn-flat white-text btn-large grey darken-3' onClick={props.startLogout}>Log Out</button></li>

                        </ul>
                    </div>
                </div>
            </nav>
            
            <br/>
            <br/>
            
        </div>



    )
}



const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())

})




export default connect(undefined, mapDispatchToProps)(Header)