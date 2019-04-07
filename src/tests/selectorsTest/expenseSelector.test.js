import selectExpense from '../../selectors/expenses'

const expenses = [
    {
        id: '1',
        description: 'gum',
        note: '',
        amount: 100,
        createdAt: 0
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: -1000
    },
    {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 10950,
        createdAt: 1000
    }
]



test('should filter by text',() => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1]])
})