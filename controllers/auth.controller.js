const UserModel = require('../models/user.model')

// function signup
module.exports.signUp = async (req, res, next) => {
    console.log("les data users", req.body)
    const {pseudo, email, password } = req.body 

    try {
      const user = await UserModel.create({ pseudo, email, password });
      res.status(201).json({ user: user._id });
    } catch (error) {
        res.status(200).send({ error });
        console.log("la reponse de erreur", error)
        // throw new Error("cannot setup new user")
    }
}