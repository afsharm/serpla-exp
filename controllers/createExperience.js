const createExperience = require('../services/createExperience');

module.exports = async (req, res) => {
    const { title, description } = req.body;
    await createExperience({ title, description });
    res.send(`Create experience: ${title} - ${description}`);
}
