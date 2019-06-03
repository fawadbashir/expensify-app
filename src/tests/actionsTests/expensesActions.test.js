import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { addExpense, 
    editExpense,
    removeExpense,
    startRemoveExpense,
    startAddExpense,
    setExpenses,
    startSetExpenses,
    startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expensesFixture'
import database from '../../firebase/firebase'

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({ id, description, amount, note, createdAt}) => {
        expenseData[id] = {description, amount, note, createdAt}
    })
    database.ref('expenses').set(expenseData).then(() => done())
})

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () =>{
    const action = removeExpense({id : '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expenses from firebase', (done) => {
    const store = createMockStore({})

    store.dispatch(startRemoveExpense({id : '123abc'})).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id: '123abc'
        })
        return database.ref(`expenses/${action[0].id}`).remove().then(() => done())
    
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

test('should edit expense on firebase', (done) => {
    const store = createMockStore({auth: {uid : 'uid123'}})

    store.dispatch(startEditExpense('123abc',{note: 'hello'})).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type:'EDIT_EXPENSE',
            id: '123abc',
            updates: {note : 'hello'}
        })
        return database.ref(`users/${uid}expenses/${action[0].id}`).update({note: 'hello'}).then(() => done())
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
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense to database and store with defaultValues',(done) => {
    const store = createMockStore({})
    const defaultExpense = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense(defaultExpense)).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpense
            }
        })
        return database.ref(`expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpense)
        done()
    })
})

test('should set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
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