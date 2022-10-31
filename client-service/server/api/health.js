module.exports = async (router) => {
    router.get('/health', async function (req, res) {
        res.status(200).json({
            message: "OK",
            data: []
        })
    })
}