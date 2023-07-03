const regi = require('../modal/restions');

const login = async (req, res) => {

    try {
        var datachaeck = await regi.find({ "email": req.body.email })


        if (datachaeck.length != 0) {
            if (datachaeck[0].passwords == req.body.passwords) {
                res.status(200).json({
                    status: " Success",
                    datachaeck
                })
            } else {
                res.status(200).json({
                    status: "Passwords Is Not Match",

                })
            }
        } else {
            res.status(200).json({
                status: "Gmail Is Not Match",

            })
        }
    } catch {
        res.status(200).json({
            status: "error",
            data
        })
    }
}

module.exports = {
    login
}