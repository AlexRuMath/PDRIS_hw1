const User = require('mongoose').models.User;

module.exports = async (users) => {
    try {
        for (let i = 0; i < users.length; i++) {
            let currentUser = users[i];

            let user = new User({
                name: currentUser.name,
                age: currentUser.age
            });

            user = await user.save();
        }
    } catch (err) {
        throw err;
    }
}