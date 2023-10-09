// Jest test files

const experienceController = require('../controllers/experienceController');

describe('Experience Controller', () => {
  describe('getAllExperiences', () => {
    it('should return all experiences', () => {
      const req = {};
      const res = {
        send: jest.fn(),
      };

      experienceController.getAllExperiences(req, res);

      expect(res.send).toHaveBeenCalledWith('Get all experiences');
    });
  });

  describe('getExperienceById', () => {
    it('should return the experience with the given ID', () => {
      const req = {
        params: {
          id: '123',
        },
      };
      const res = {
        send: jest.fn(),
      };

      experienceController.getExperienceById(req, res);

      expect(res.send).toHaveBeenCalledWith('Get experience with ID 123');
    });
  });

  describe('createExperience', () => {
    it('should create a new experience', () => {
      const req = {
        body: {
          title: 'New Experience',
          description: 'Some description',
        },
      };
      const res = {
        send: jest.fn(),
      };

      experienceController.createExperience(req, res);

      expect(res.send).toHaveBeenCalledWith('Create experience: New Experience - Some description');
    });
  });

  describe('updateExperience', () => {
    it('should update an existing experience with the given ID', () => {
      const req = {
        params: {
          id: '123',
        },
        body: {
          title: 'Updated Experience',
          description: 'Updated description',
        },
      };
      const res = {
        send: jest.fn(),
      };

      experienceController.updateExperience(req, res);

      expect(res.send).toHaveBeenCalledWith('Update experience with ID 123: Updated Experience - Updated description');
    });
  });

  describe('deleteExperience', () => {
    it('should delete the experience with the given ID', () => {
      const req = {
        params: {
          id: '123',
        },
      };
      const res = {
        send: jest.fn(),
      };

      experienceController.deleteExperience(req, res);

      expect(res.send).toHaveBeenCalledWith('Delete experience with ID 123');
    });
  });
});