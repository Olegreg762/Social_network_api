const {User, Thought} = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().sort({createdAt: -1});
            res.status(200).json(thoughts);
        } catch (error) {
          res.status(500).json(error);  
        }
    },
    async getThoughtId(req, res) {
        try {
            const thought = await Thought.findOne(
                {_id: req.params.id}
            );
            res.status(200).json(thought);
        } catch (error) {
          res.status(500).json(error);
        }
    },
    async newThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: thought._id}},
                {new: true}
            );
            res.status(200).json(user);
        } catch (error) {
          res.status(500).json(error);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new:true, runValidators: true}
            );
            res.status(200).json(thought);
        } catch (error) {
          res.status(500).json(error);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(
                {_id: req.params.id}
            );
            const user = await User.findOneAndUpdate(
                {thoughts: req.params.thoughtId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true}
            );
            res.status(200).json(thought);
        } catch (error) {
          res.status(500).json(error); 
        }
    },
    async newReact(req, res) {
        try {
          const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $: {reactions: req.body}},
            {new: true, runValidators: true}
          );
          res.status(200).json(reaction);
        } catch (error) {
          res.status(500).json(error);
        }
    },
    async deleteReact(req, res) {
        try {
          const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $: {reactions: {id: req.params.id}}},
            {new: true, runValidators: true}
          );
          res.status(200).json(reaction);
        } catch (error) {
          res.status(500).json(error);
        }
    }
};