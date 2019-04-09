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
    amount:0}
    const state = expensesReducer(expenses,{type:'ADD_EXPENSE',expense:{
        id:'4',
        description: 'coffee',
        note:'',
        createdAt:0,
        amount:0
    }})
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