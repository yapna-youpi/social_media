const UserModel = require('../models/user.model');
const ObjetId = require('mongoose').Types.ObjectId;

//get all user
module.exports.getAllUsers = async (req, res, next) =>{
    try {
        const users = await UserModel.find().select("-password");
        res.status(200).json(users);
        next();
    } catch (error) {
        (error) => console.log("dont wanted to give all bd users", error);
    }
}
// get user whit her id
module.exports.userInfo = async (req, res ,next) => {
    console.log(req.params); 

    if (!ObjetId.isValid(req.params.id)) {
        return res.status(400).send("Id unknow : " + req.params.id)
    } 
    const user = await UserModel.findById(req.params.id).exec();
    res.send(user)
    next();
}
//update user whit hr id
module.exports.updateUser = async (req, res, next) =>{
    if (!ObjetId.isValid(req.params.id)) {
        return res.status(400).send("Id unknow : " + req.params.id)
    } 
    
    try {
        const updateResult = await UserModel.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $set: {bio: req.body.bio}   
            }
        )
        console.log(updateResult)
        res.status(201).json({message: "update succesfull"})
        next()

    } catch (error) {console.log(error)
        return res.status(501).json({message2: error})
    }
}

