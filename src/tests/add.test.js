const generateGreeting = (name) => `Hello ${name}`

test('Should be name',()=>{
    const myName = generateGreeting('Fawad')
    expect(myName).toBe('Hello Fawad')
    
})