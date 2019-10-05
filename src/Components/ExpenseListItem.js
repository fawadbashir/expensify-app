import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'



const ExpenseListItem = ({ id, description, amount, createdAt }) => (


    <Card.Body style={{ borderBottom: '1px solid #e5e5e5' }} >

        <Link className='list-group-item-action' to={`/edit/${id}`}>
            <Card.Title bg='dark' as='h3'>{description}</Card.Title>
        </Link>



        <Card.Subtitle className='mt-4'> {moment(createdAt).format('MMMM do YYYY')}
            <Card.Text as='span' className='float-right '>{numeral(amount / 100).format('$0,0.00')}</Card.Text>
        </Card.Subtitle>



    </Card.Body>





)
export default ExpenseListItem