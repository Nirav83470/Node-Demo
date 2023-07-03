const addprodus = require('../modal/addproduct');

const addss = async (req, res) => {
    var dataadd = await addprodus.create(req.body)

    res.status(200).json({
        status: "Your Product Success Add !!!!",
        dataadd
    })

}
module.exports ={
    addss
}