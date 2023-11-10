const { error } = require('./constants')
class Note {
    constructor({ id, content, date, startTime, endTime, locationId, userId }) {
        this.id = id
        this.content = content
        this.date = date
        this.startTime = startTime
        this.endTime = endTime
        this.locationId = locationId
        this.userId = userId
    }
    createNote(note) {
        const validation = this.isValid(note)
        if (!validation.valid) throw new Error(validation.error)
        return 'Note created'
    }
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
    }
}

module.exports = Note
