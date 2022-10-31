'use strict'
require("dotenv").config({ path: __dirname + "/.env" })
require('./src/db/mongoose')

const parserCSV = require("./src/utils/read-file");
const checking = require("./src/utils/check-users");
const addUsers = require("./src/utils/add-user");
const getUsers = require("./src/utils/get-users");

async function start() {
    try {
        let usersFromFile = await parserCSV(process.env.FILE);
        let undiscoveredUsers = await checking(usersFromFile);
        await addUsers(undiscoveredUsers);
        let usersInDb = await getUsers();

        let isAllUsersAddedToDB = (await checking(usersFromFile)).length === 0
        if(!isAllUsersAddedToDB){
            throw new Error("An error occurred while writing to the database")
        }

        process.exit(0)
    } catch (err) {
        console.error(err)
        process.exit(0)
    }
}

start()
