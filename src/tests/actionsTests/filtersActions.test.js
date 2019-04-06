import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'


test('should setup setTextFilter',()=>{
    const action = setTextFilter('Hello')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hello'
    })
})

test('should setup setTextFilter with empty value',() => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sorting with Amount',() => {
    const action  = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        
    })
})


test('should setup sorting with Date',() => {
    const action  = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        
    })
})

test('should setup setStartDate',() => {
    const action = setStartDate()
    expect(action).toEqual({
        type: 'SET_START_DATE'
    })
})

test('should setup setEndtDate',() => {
    const action = setEndDate()
    expect(action).toEqual({
        type: 'SET_END_DATE'
    })
})