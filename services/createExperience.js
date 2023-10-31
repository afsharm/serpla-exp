const Experience = require('../models/Experience');

module.exports = async (experienceData) => {
    const newExperience = new Experience(experienceData);
    return await newExperience.save();
}
