import database from '../firebase/firebase'

//ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }

    const ref = await database.ref('expenses').push(expense)
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }))
  }
}

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
})

 const startRemoveExpense = ({id} = {}) => {
  return async (dispatch) => { 
 await database.ref(`expenses/${id}`).remove()
     dispatch(removeExpense({id}))
  }

}

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})

//SET_EXPENSE
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return  async (dispatch) => {
   const snapshot = await database.ref('expenses').once('value')
    const expenses = []
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    dispatch(setExpenses(expenses))
  }
}

export { startRemoveExpense }