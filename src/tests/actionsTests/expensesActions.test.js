import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const action = addExpense({
        // id:'123abc',
        description: 'My New Note',
        note: 'Note',
        amount: 1000,
        createdAt: 10
    })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'My New Note',
            note: 'Note',
            amount: 1000,
            createdAt: 10
        }
    })
})


test('should setup add expense action object with empty Values',()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})