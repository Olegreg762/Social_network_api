const {User, Thought} = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(202).json(users);
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async getOneUser (req, res) {
        try {
            const user = User.findOne({_id: req.params.id}).populate({path: "thoughts", select: "-__v"})
            res.status(200).json(user)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async createUser(req, res) {
        try {
            const newUser =User.create(req.body)
            res.status(200).json(newUser)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async updateUser(req, res) {
        try {
            const user = User.findByIdAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new: true, runValidators: true}
            )
            res.status(200).json(user)
        } catch (error) {
            res.status(404).json(error)
        }
    },


}
