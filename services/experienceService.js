const Experience = require('../models/Experience');

class ExperienceService {
  async getExperienceById(id) {
    return await Experience.findById(id);
  }

  async updateExperience(id, updatedData) {
    return await Experience.findByIdAndUpdate(id, updatedData, { new: true });
  }

  async deleteExperience(id) {
    return await Experience.findByIdAndDelete(id);
  }
}

module.exports = ExperienceService;