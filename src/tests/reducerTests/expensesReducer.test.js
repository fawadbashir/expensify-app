import expensesReducer from '../../reducers/expenses'


test('should set default state', () => {
    const state = expensesReducer([],{type : '@@INIT'})
    expect(state).toEqual([])
})

test('should set Add Expense' ,() => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Hello',
        amount: 1000,
        createdAt: 0,
        note: ''
    }   
    }
    const state = expensesReducer([],action)
    expect(state.toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: 'Hello',
            amount: 1000,
            createdAt: 0,
            note: ''    
        }
    }))
})