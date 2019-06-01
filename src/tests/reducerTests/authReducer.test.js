import authReducer from '../../reducers/auth'

test('should set default state', () => {
    const state = authReducer({},{type : '@@INIT'})
    expect(state).toEqual({})
})

test('should set login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    }
    
    const state = authReducer({},action)
    expect(state).toEqual({uid: '123abc'})
})

test('should set logout', () => {
    const action = {
        type: 'LOGOUT',
        
    }
    const state = authReducer({uid : '123abc'},action)
    expect(state).toEqual({})
})