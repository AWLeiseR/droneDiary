const { error } = require('../src/constants')
const Locations = require('../src/Locations')
const assert = require('assert')
const { describe, it } = require('mocha')
describe('Locations handler tests', () => {
    describe('Create location tests', () => {
        it('should throw a new error of invalid location', () => {
            const invalidLocation = require('../mocks/invalidLocation.json')
            assert.throws(
                () => {
                    Locations.createLocation(invalidLocation)
                },
                (e) => {
                    return e instanceof Error && e.message === error.INVALID_LOCATION
                }
            )
        })
        it('Should return a message of location created', () => {
            const validLocation = require('../mocks/validLocation.json')
            const expected = 'Location created'
            const result = Locations.createLocation(validLocation)
            assert.deepEqual(result, expected)
        })
    })
})
