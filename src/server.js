import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/env.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import router from './routes/index.js';
// src/server.js
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ ok: true, name: 'Fleet API', version: '1.0.0' });
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(config.apiPrefix, router);

app.use(notFoundHandler);
app.use(errorHandler);

const port = config.port;
app.listen(port, () => {
  console.log(`🚚 Fleet API running on http://localhost:${port}${config.apiPrefix}`);
});
