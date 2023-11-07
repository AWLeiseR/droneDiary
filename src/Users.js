const { error } = require('../src/constants')
const Users = {
    createUser(user) {
        const validation = this.isValid(user)
        if (!validation.valid) throw new Error(validation.error)
        return 'User created'
    },
    isValid(user) {
        if (
            !user.id ||
            user.id.length < 1 ||
            !user.name ||
            user.name.length < 1 ||
            !user.email ||
            user.email.length < 1
        ) {
            return { error: error.INVALID_USER, valid: false }
        }
        return { valid: true }
    },
}

module.exports = Users
