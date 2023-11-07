const { error } = require('../src/constants')
const Notes = require('../src/Notes')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('Notes handler tests', () => {
    describe('Create note tests', () => {
        it('Should throw a error of invalid Note', () => {
            const invalidNote = require('../mocks/invalidNote.json')
            assert.throws(
                () => {
                    Notes.createNote(invalidNote)
                },
                (e) => {
                    return e instanceof Error && e.message === error.INVALID_NOTE
                }
            )
        })
        it('Should return a message of note created', () => {
            const validNote = require('../mocks/validNote.json')
            const expected = 'Note created'
            const result = Notes.createNote(validNote)
            assert.deepEqual(result, expected)
        })
    })
})
