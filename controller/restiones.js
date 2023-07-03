const regi = require('../modal/restions');

const dataadd = async(req, res) => {
    try{
        var addfroms = await regi.create(req.body)

        res.status(200).json({
            status:"Success",
            addfroms
        })
    }
    catch{
        res.status(401).json({
            status: "error",
            data
        })
    }
}

module.exports = { 
    dataadd 
}