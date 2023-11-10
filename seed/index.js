const User = require('../src/User')
const { faker } = require('@faker-js/faker')
const { join } = require('path')
const { writeFile } = require('fs/promises')
const seederBaseFolder = join(__dirname, '../', 'database')
const ITEMS_AMOUNT = 2

const users = []
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
    const user = new User({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.lorem.word() + '@email.com',
    })
    users.push(user)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
    await write('users.json', users)

    console.log('users', users)
})()
