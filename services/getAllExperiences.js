const Experience = require('../models/Experience');

module.exports = async () => {
    return await Experience.find({});
}
