const router = require('express').Router;
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

router.use((req, res) => res.send("Invalid Route!"));

module.exports = router;