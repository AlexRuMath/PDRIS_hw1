const User = require('mongoose').models.User;

module.exports = async function(usersInFile) {
    const result = []

    try {
        for (let i = 0; i < usersInFile.length; i++) {
            const currentUser = usersInFile[i];

            let findUser = await User.findOne(currentUser)
            if (!findUser) result.push(currentUser);
        }

        return result;
    } catch (err) {
        throw err;
    }
}