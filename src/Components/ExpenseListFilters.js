import React, { Component } from 'react'
import { connect } from 'react-redux'
import {DateRangePicker} from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate } from '../actions/filters'
import uuidv4 from 'uuidv4'

class expenseListFilters extends Component {
    state = {
        focusedInput : null
    }
    onDatesChange =({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (focusedInput)=>{this.setState(()=>({focusedInput}))}

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                   this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate())
                    } else {
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate = {this.props.filters.startDate}
                startDateId = {uuidv4()}
                endDate = {this.props.filters.endDate}
                endDateId= {uuidv4()}
                onDatesChange = {this.onDatesChange}
                focusedInput ={this.state.focusedInput}
                onFocusChange = {this.onFocusChange}
                isOutsideRange ={()=> false}

                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(expenseListFilters)