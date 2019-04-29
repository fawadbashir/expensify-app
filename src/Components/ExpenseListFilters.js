import React, { Component } from 'react'
import { connect } from 'react-redux'
import {DateRangePicker} from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate } from '../actions/filters'

 class expenseListFilters extends Component {
    state = {
        focusedInput : null
    }
    onDatesChange =({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (focusedInput)=>{this.setState(()=>({focusedInput}))}

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
     }

     onSortBy = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate()
        } else {
            this.props.sortByAmount()
        }
    }



    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} 
                    onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate = {this.props.filters.startDate}
                startDateId = {'123abc'}
                endDate = {this.props.filters.endDate}
                endDateId= {'abc123'}
                onDatesChange = {this.onDatesChange}
                focusedInput ={this.state.focusedInput}
                onFocusChange = {this.onFocusChange}
                isOutsideRange ={()=> false}

                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters   
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

})
export { expenseListFilters }
export default connect(mapStateToProps,mapDispatchToProps)(expenseListFilters)