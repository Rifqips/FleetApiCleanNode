// src/config/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.3',
    info: { title: 'Fleet API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: [path.join(__dirname, '../modules/**/*.js')],
};

export const swaggerSpec = swaggerJSDoc(options);
