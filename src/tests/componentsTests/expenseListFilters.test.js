import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json'
import moment from 'moment'
import { filters, altFilters} from '../fixtures/filtersFixture'
import {expenseListFilters as ExpenseListFilters} from '../../Components/ExpenseListFilters'
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
     wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )
})

test('should render ExpenseListFilters correcty', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altFilters correcty', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot()
})

test('should handle text Change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target : {    value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sortBy date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target : { value}
    })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should sortBy amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target : { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date Changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle Focus Change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate')
    expect(wrapper.state('focusedInput')).toBe('endDate')
})