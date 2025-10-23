import { VehicleRepository } from './repository.js';

export const VehicleService = {
  create: (payload) => VehicleRepository.create(payload),
  get: async (id) => {
    const item = await VehicleRepository.findById(id);
    if (!item) {
      const err = new Error('Vehicle not found');
      err.status = 404;
      throw err;
    }
    return item;
  },
  list: (params) => VehicleRepository.list(params),
  update: async (id, payload) => {
    const exist = await VehicleRepository.findById(id);
    if (!exist) {
      const err = new Error('Vehicle not found');
      err.status = 404;
      throw err;
    }
    return VehicleRepository.update(id, payload);
  },
  remove: async (id) => {
    const deletedId = await VehicleRepository.remove(id);
    if (!deletedId) {
      const err = new Error('Vehicle not found');
      err.status = 404;
      throw err;
    }
    return { id: deletedId };
  }
};
