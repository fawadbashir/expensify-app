

const moment = jest.require.requireActual('moment')

jest.mock(moment)

export default (timestamp = 0) => moment(timestamp)