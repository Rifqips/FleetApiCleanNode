import { VehicleService } from './service.js';

export const VehicleController = {
  create: async (req, res, next) => {
    try {
      const created = await VehicleService.create(req.body);
      res.status(201).json(created);
    } catch (e) { next(e); }
  },
  get: async (req, res, next) => {
    try {
      const item = await VehicleService.get(Number(req.params.id));
      res.json(item);
    } catch (e) { next(e); }
  },
  list: async (req, res, next) => {
    try {
      const { q = '', page = 1, limit = 10 } = req.query;
      const data = await VehicleService.list({ q, page: Number(page), limit: Number(limit) });
      res.json(data);
    } catch (e) { next(e); }
  },
  update: async (req, res, next) => {
    try {
      const updated = await VehicleService.update(Number(req.params.id), req.body);
      res.json(updated);
    } catch (e) { next(e); }
  },
  remove: async (req, res, next) => {
    try {
      const result = await VehicleService.remove(Number(req.params.id));
      res.json(result);
    } catch (e) { next(e); }
  }
};
