import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavigationBar = () => (
    <Fragment>
        <Navbar expand='lg' variant='dark' bg='dark'>


            <Link to='/dashboard'><Navbar.Brand >Expensify</Navbar.Brand></Link>
            {/* <Navbar.Toggle aria-controls controls='basic-navbar-nav' /> */}
            {/* <Navbar.Collapse id='basic-navbar-nav' /> */}
            <Nav className='ml-auto'>
                <Nav.Item>

                    {/* <Nav.Link as={Link} ><Link to='/dashboard'>
                    </Link></Nav.Link> */}

                    {/* <Link className = 'nav-link' to='/dashboard'>Home</Link> */}


                </Nav.Item>
            </Nav>



        </Navbar>
    </Fragment >
)

export default NavigationBar

