const User = require('../src/11.js')

test('find a user by username johndoe', () => {
    expect(User.findByUserName('johndoe')).toEqual(
        expect.objectContaining({ 
            id: 3, 
            username: 'johndoe', 
            name: 'John Doe' 
        })
    )
})