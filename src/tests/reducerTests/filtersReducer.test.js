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

test('should set Filter by text', () => {
    
    const action = {
        type:'SET_TEXT_FILTER',
        text:'This is my filter'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('This is my filter')
})

test('should set startDate filter', () => {
    // const startDate = moment().startOf('month')
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0))
})

test('should set EndDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment().endOf('month'))
})