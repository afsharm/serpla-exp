// Controller logic for experience-related routes

const ExperienceService = require('../services/experienceService');
const getAllExperiences = require('../services/getAllExperiences');

exports.getAllExperiences = async (req, res) => {
    // Logic to fetch all experiences

    const allExperiences = await getAllExperiences()
    return res.json(allExperiences);
};

exports.getExperienceById = (req, res) => {
    // Logic to fetch an experience by ID
    const { id } = req.params;
    res.send(`Get experience with ID ${id}`);
};

exports.updateExperience = (req, res) => {
    // Logic to update an existing experience by ID using the request body
    const { id } = req.params;
    const { title, description } = req.body;
    res.send(`Update experience with ID ${id}: ${title} - ${description}`);
};

exports.deleteExperience = (req, res) => {
    // Logic to delete an experience by ID
    const { id } = req.params;
    res.send(`Delete experience with ID ${id}`);
};