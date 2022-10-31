const User = require("mongoose").models.User;

module.exports = async (router) => {
    router.get('/:id', async function (req, res) {
        try {
            let id = req.params.id
            let user = await User.findOne({ _id: id });

            if (user === null) {
                res.status(204).json({ message: "Not found anything user", data: [] })
            }

            let result = {
                id: id,
                name: user.name,
                age: user.age
            }
            res.status(200).json({ message: "OK", data: result });
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Whats wrongs on server", data: err })
        }
    })
}