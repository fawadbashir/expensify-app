import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'


test('should setup setTextFilter', () => {
    const action = setTextFilter('Hello')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hello'
    })
})

test('should setup setTextFilter with empty value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sorting with Amount', () => {

    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT', })
})


test('should setup sorting with Date', () => {

    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE', })
})

test('should generate set start Date Object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set End Date Object', () => {
    const action = setEndDate(moment(1))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    })
})