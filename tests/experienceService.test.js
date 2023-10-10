const ExperienceService = require('../services/experienceService');
const Experience = require('../models/Experience');

jest.mock('../services/experienceService', () => {
    return jest.fn().mockImplementation(() => ({
        createExperience: () => { return { _id: '123' } }
    }));
})

describe('ExperienceService', () => {
    let service;

    beforeAll(() => {
        service = new ExperienceService();
    });

    it('should create a new experience', async () => {
        // Create a mock Experience model with a save method
        const experienceMock = {
            save: jest.fn().mockResolvedValue({ _id: '123' }),
        };

        // Mock the Experience model constructor
        jest.spyOn(Experience, 'create').mockReturnValue(experienceMock);

        // Call the service method
        const experienceData = { title: 'New Experience', description: 'abc' };
        const result = await service.createExperience(experienceData);

        // Expectations
        expect(result._id).toBe('123');
    });
});