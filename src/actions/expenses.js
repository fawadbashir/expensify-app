import database from '../firebase/firebase'

//ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch,getState) => {
    
    const uid = getState().auth.uid
    console.log(getState())
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }

    const ref = await database.ref(`users/${uid}/expenses`).push(expense)
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
  return async (dispatch,getState) => { 
    const uid = getState().auth.uid
 await database.ref(`users/${uid}/expenses/${id}`).remove()
 console.log(database.ref(`users/${uid}`).child('admin'))
     dispatch(removeExpense({id}))
  }

}

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return async (dispatch,getState) => {
    
    const uid = getState().auth.uid

  await database.ref(`users/${uid}/expenses/${id}`).update(updates)
   dispatch(editExpense(id, updates))

  }
}

//SET_EXPENSE
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = ()  => {
  return async (dispatch,getState) => {
    
    const uid = getState().auth.uid
      const snapshot = await database.ref(`users/${uid}/expenses`).once('value');
    const expenses = []
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    })
    console.log(expenses)
    dispatch(setExpenses(expenses));
    
  }
}

export { startRemoveExpense }