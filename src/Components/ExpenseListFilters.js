import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputGroup } from 'react-bootstrap'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'



class expenseListFilters extends Component {
    state = {
        focusedInput: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (focusedInput) => { this.setState(() => ({ focusedInput })) }

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
            //Use Input group here instead of dforms
            <InputGroup className='mt-3 mb-4'>

                {/* style={{ marginRight: '20px', width: '3px', paddingRight: '10px' }} */}
                <input style={{ padding: '12px', marginRight: '12px' }} as='input' type="text" value={this.props.filters.text}
                    onChange={this.onTextChange} />

                <select className='custom-select btn-mini' style={{ marginRight: '12px' }} value={this.props.filters.sortBy} onChange={this.onSortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>





                {/* <h1>Hello</h1> */}

                <DateRangePicker regular noBorder
                    startDate={this.props.filters.startDate}
                    startDateId={'123abc'}
                    endDate={this.props.filters.endDate}
                    endDateId={'abc123'}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false}
                    numberOfMonths={1}

                />



            </InputGroup>
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
export default connect(mapStateToProps, mapDispatchToProps)(expenseListFilters)