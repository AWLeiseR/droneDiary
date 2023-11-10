const User = require('../src/User')
const Note = require('../src/Note')
const { faker } = require('@faker-js/faker')
const { join } = require('path')
const { writeFile } = require('fs/promises')
const seederBaseFolder = join(__dirname, '../', 'database')
const ITEMS_AMOUNT = 2

const users = []
const notes = []
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
    const user = new User({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.lorem.word() + '@email.com',
    })
    const note = new Note({
        id: faker.string.uuid(),
        content: faker.lorem.words(10),
        date: faker.date.anytime(),
        startTime: faker.date.anytime(),
        endTime: faker.date.anytime(),
    })
    notes.push(note)
    users.push(user)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
    await write('users.json', users)
    await write('notes.json', notes)
    console.log('users', users)
    console.log('notes', notes)
})()
