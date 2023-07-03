const addprodus =require('../modal/addproduct');

const finfone = async (req, res) =>{
    
    var findall = await addprodus.create(req, res)

    res.status(200).json({
        status: "Yours Product Seen ____!",
        findall
    })
}
module.exports = {
    finfone
}