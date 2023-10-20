const router = require('express').Router();
const {
    getThoughts,
    getThoughtId,
    newThought,
    updateThought,
    deleteThought,
    newReact,
    deleteReact
} = require('../../controllers/thoughtControl');

router.route('/').get(getThoughts).post(newThought);
router.route('/:id').get(getThoughtId).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(newReact);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReact);

module.exports = router;