const {User, Thought} = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(202).json(users);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async getOneUser (req, res) {
        try {
            const user = await User.findOne({_id: req.params.id}).populate({path: "thoughts", select: "-__v"})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.status(200).json(newUser)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new: true, runValidators: true}
            )
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.id})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async addFriend(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId});
            const friend = await User.findOne({_id: req.params.friendId});
            if(!user.friends.includes(friend._id) || !friend.friends.includes(user._id)){
                const newFriend1 = await User.findOneAndUpdate(
                    {_id: req.params.userId},
                    {$push: {friends: req.params.friendId}},
                    {new: true}
                )
                
                const newFriend2 = await User.findOneAndUpdate(
                    {_id: req.params.friendId},
                    {$push: {friends: req.params.userId}},
                    {new: true}
                )
                res.status(200).json(newFriend1)
            } else{
                res.status(200).json({message:"Already Friends"})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    
    },
    async deleteFriend(req, res) {
        try {
            const delFriend = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            )
            const delFriend2 = await User.findOneAndUpdate(
                {_id: req.params.friendId},
                {$pull: {friends: req.params.userId}},
                {new: true}
            )
            res.status(200).json(delFriend)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}