const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getUsers: function() {
        const filePath = path.join(__dirname, "../users.json");
        const users = JSON.parse(fs.readFileSync(filePath, "utf-8"))
        return users
    },

    findUserEmail: function(email) {
        let users = this.getUsers()
        let userFound = users.find(user => user["email"] === email)
        return userFound
    }
}