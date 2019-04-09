import moment from 'moment'
import filtersReducer from '../../reducers/filters'


test('should set filter by default Values', () => {
    const state = filtersReducer(undefined, {type : '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set filter sortByAmount', () => {
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sort By Date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})