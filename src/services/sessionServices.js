const { Users } = require("../../database/models")

module.exports = {
    findUserEmail: (email) => {
        return Users.findOne(
            {
                where:{
                    email: email
                }
            }
        )
    }
}