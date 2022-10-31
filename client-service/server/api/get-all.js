const User = require("mongoose").models.User;

module.exports = async (router) => {
    router.get('/', async function (req, res) {
        try {
            let users = await User.find();
            let result = [];

            if (users.length == 0) {
                res.status(204).json({ message: "Not found anything user", data: [] })
            }

            for (let i = 0; i < users.length; i++) {
                let user = users[i]
                result.push({
                    id: user.id,
                    name: user.name,
                    age: user.age
                })
            }

            res.status(200).json({ message: "OK", data: result });
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Whats wrongs on server", data: err })
        }
    })
}