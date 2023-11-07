const { error } = require('../src/constants')
const Users = require('../src/Users')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('Users handler tests', () => {
    describe('Create user tests', () => {
        it('Should return a error of invalid user', () => {
            const invalidUser = require('../mocks/invalidUser.json')
            assert.throws(
                () => {
                    Users.createUser(invalidUser)
                },
                (e) => {
                    return e instanceof Error && e.message === error.INVALID_USER
                }
            )
        })
        it('Should return a message of user created', () => {
            const validUser = require('../mocks/validUser.json')
            const expected = 'User created'
            const result = Users.createUser(validUser)
            assert.deepEqual(result, expected)
        })
    })
})
