const connection = require('../config/connection');
const {User} = require('../models');
const seedData = require('./seedData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log("connected");

    await User.deleteMany({});
    await User.collection.insertMany(seedData);

    console.table(seedData);
    console.info('Seeding Completed')
});