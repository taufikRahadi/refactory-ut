const User = {
    list: [
        { id: 1, username: 'mul14', name: 'Mulia' },
        { id: 2, username: 'durjaka', name: 'Arifandi' },
        { id: 3, username: 'johndoe', name: 'John Doe' },
        { id: 4, username: 'norisa', name: 'Norisa' },
        { id: 5, username: 'sagara', name: 'Sasuke Sagara' },
    ],

    findByUserName(username) {
        return this.list.find(user => user.username.match(new RegExp(username, "g")))
    }
}

module.exports = User