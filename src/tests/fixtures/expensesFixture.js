import moment from 'moment'

 export default [
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