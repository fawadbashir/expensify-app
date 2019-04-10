import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expensesFixture'


test('should set default state', () => {
    const state = expensesReducer([],{type : '@@INIT'})
    expect(state).toEqual([])
})


test('should set add Expense', () => {
    
    const expense= {id:'4',
    description: 'coffee',
    note:'',
    createdAt:0,
    amount:0
    }

    const state = expensesReducer(expenses,{type:'ADD_EXPENSE',expense})
    expect(state).toEqual([...expenses,expense])
})

test('should set remove Expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove Expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should edit an Expense', () => {
    const updates= {
        description : 'food',
        amount: 1095,
        createdAt: 10000,
        note: ''
    }
    const action = {
        type : 'EDIT_EXPENSE',
        id : '2',
        updates 
    }
    const state = expensesReducer(expenses,action)
    expect(state.action).toEqual(expenses[{id:'2'}])
})

test('should edit an Expense if expense not Found', () => {
    
    const action = {
        type : 'EDIT_EXPENSE',
        id : '2',
        updates : undefined
    }
    const state = expensesReducer(expenses,action)
    expect(state.action).toEqual(expenses[{id:'2'}])
})


