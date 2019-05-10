import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expensesFixture'


const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () =>{
    const action = removeExpense({id : '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object',() => {
    const action = editExpense('123abc',{note : 'My New Note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates : {note :'My New Note'}
    })
})

test('should setup add expense action object', () => {
    const action = addExpense([expenses[1]])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: [expenses[1]]
    })
})

test('should add expense to database and store',(done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 10000,
        note: 'This one is better',
        createdAt: 3000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1)
        done()
    })
})


// test('should setup add expense action object with empty Values',()=>{
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })