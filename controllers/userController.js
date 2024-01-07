const userModel = require("../models/userModel");
//info callback
const infoController = async (req,res) =>{
    try {
        console.log("trying to send info")
        console.log(req.body);
        const newInfo = new userModel(req.body);
        await newInfo.save();
        res.status(201).send('Response created');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
//exporting
module.exports = {infoController};