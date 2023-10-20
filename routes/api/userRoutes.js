const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userControl');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/:userid/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;