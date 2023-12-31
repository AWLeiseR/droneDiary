const { error } = require('./constants')

class Location {
    constructor({ id, name, latitude, longitude }) {
        this.id = id
        this.name = name
        this.latitude = latitude
        this.longitude = longitude
    }
    createLocation(location) {
        const validation = this.isValid(location)
        if (!validation.valid) throw new Error(validation.error)
        return 'Location created'
    }
    isValid(location) {
        if (
            !location.id ||
            location.id.length < 1 ||
            !location.latitude ||
            location.latitude.length < 1 ||
            !location.longitude ||
            location.longitude.length < 1
        ) {
            return { error: error.INVALID_LOCATION, valid: false }
        }
        return { valid: true }
    }
}

module.exports = Location
