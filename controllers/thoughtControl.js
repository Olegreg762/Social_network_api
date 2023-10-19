const {User, Thought} = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().sort({createdAt: -1});
            res.status(200).json(thoughts)
        } catch (error) {
          res.status(500).json(error)  
        }
    },
    async getThoughtId(req, res) {
        try {
            
        } catch (error) {
          res.status(500).json(error)  
        }
    },
    async newThought(req, res) {
        try {
            
        } catch (error) {
          res.status(500).json(error)  
        }
    },
    async updateThought(req, res) {
        try {
            
        } catch (error) {
          res.status(500).json(error)  
        }
    },
    async deleteThought(req, res) {
        try {
            
        } catch (error) {
          res.status(500).json(error)  
        }
    },
    async newReact(req, res) {
        try {
            
        } catch (error) {
          res.status(500).json(error)  
        }
    },
    async deleteReact(req, res) {
        try {
            
        } catch (error) {
          res.status(500).json(error)  
        }
    }
}