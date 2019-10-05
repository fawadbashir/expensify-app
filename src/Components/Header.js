import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { startLogout } from '../actions/auth'

export const Header = (props) => {
    console.log(props.name)
    return (

        <>

            <Navbar variant='dark' bg='dark'>

                <Link className='ml-lg-5' to='/dashboard'><Navbar.Brand >Expensify</Navbar.Brand></Link>
                {/* <Navbar.Toggle aria-controls controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' /> */}
                <Nav className='ml-auto'>

                </Nav>


                <Button className='' onClick={props.startLogout} variant='dark'>Logout</Button>
            </Navbar>



        </>




    )
}



const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())

})




export default connect(undefined, mapDispatchToProps)(Header)