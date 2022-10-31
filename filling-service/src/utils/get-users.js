const User = require('mongoose').models.User;

module.exports = async () => {
    try {
        let users = await User.find()
        return users;
    } catch (err){
        throw err
    }
}