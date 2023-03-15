import express from 'express';
import morgan from 'morgan';
import BrandRoutes from './routes/brand.routes.js';
import EmployeeRoutes from './routes/employee.routes.js';
import RefRoutes from './routes/ref.routes.js';
import ProductRoutes from './routes/product.routes.js';
import AssignProductRoutes from './routes/assignProduct.routes.js';
import cors from 'cors';
//swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJSDocs from 'swagger-jsdoc';
import {options} from './swaggerOptions.js'
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

//middlewares
const corsOptions={}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const specs = swaggerJSDoc(options);

//routes
app.use('/api/v1/brands', BrandRoutes);
app.use('/api/v1/employees', EmployeeRoutes);
app.use('/api/v1/refs', RefRoutes);
app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/assigns', AssignProductRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;