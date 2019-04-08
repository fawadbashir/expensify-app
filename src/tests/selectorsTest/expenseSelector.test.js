import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [
    {
        id: '1',
        description: 'gum',
        note: '',
        amount: 100,
        createdAt: moment(0).valueOf()
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4,'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 10950,
        createdAt: moment(0).add(4,'days').valueOf()
    }
]



test('should filter by text',() => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('should filter by startDate',() => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    ex
})

