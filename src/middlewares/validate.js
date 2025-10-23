import Joi from 'joi';

export const validate = (schema) => (req, res, next) => {
  const data = { body: req.body, params: req.params, query: req.query };
  const { error } = schema.validate(data, { abortEarly: false, allowUnknown: true });
  if (error) {
    error.status = 400;
    error.message = 'Validation error';
    error.details = error.details.map(d => d.message);
    return next(error);
  }
  next();
};

export const vehicleSchemas = {
  create: Joi.object({
    body: Joi.object({
      plate_number: Joi.string().max(20).required(),
      brand: Joi.string().max(50).required(),
      model: Joi.string().max(50).required(),
      year: Joi.number().integer().min(1900).max(2100).required(),
      status: Joi.string().valid('active', 'maintenance', 'inactive').default('active'),
    })
  }),
  update: Joi.object({
    body: Joi.object({
      brand: Joi.string().max(50),
      model: Joi.string().max(50),
      year: Joi.number().integer().min(1900).max(2100),
      status: Joi.string().valid('active', 'maintenance', 'inactive'),
    }),
    params: Joi.object({
      id: Joi.number().integer().required()
    })
  }),
  idParam: Joi.object({
    params: Joi.object({
      id: Joi.number().integer().required()
    })
  }),
  listQuery: Joi.object({
    query: Joi.object({
      q: Joi.string().allow(''),
      page: Joi.number().integer().min(1).default(1),
      limit: Joi.number().integer().min(1).max(100).default(10),
    })
  })
};
