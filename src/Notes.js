const { error } = require('../src/constants')
const Notes = {
    createNote(note) {
        const validation = this.isValid(note)
        if (!validation.valid) throw new Error(validation.error)
        return 'Note created'
    },
    isValid(note) {
        if (
            !note.id ||
            note.id.length < 1 ||
            !note.date ||
            note.date.length < 1 ||
            !note.startTime ||
            note.startTime.length < 1 ||
            !note.endTime ||
            note.endTime.length < 1
        ) {
            return { error: error.INVALID_NOTE, valid: false }
        }
        return { valid: true }
    },
}

module.exports = Notes
