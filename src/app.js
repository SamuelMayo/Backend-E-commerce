import express from "express";
import handlebars from 'express-handlebars';
import mongoose, { mongo } from "mongoose";
import cookieParser from "cookie-parser";
import __dirname from "./utils.js";
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js'
import productsRouter from './routes/products.router.js'
import usersRouter from './routes/users.router.js'
import cartsRouter from './routes/carts.router.js'
import config from "./config/config.js";
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'

const app = express();

// const connection = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@codercluster.jryq6qx.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`);
const connection = mongoose.connect(`mongodb://${config.mongo.USER}:${config.mongo.PWD}@ac-gcqxrno-shard-00-00.jryq6qx.mongodb.net:27017,ac-gcqxrno-shard-00-01.jryq6qx.mongodb.net:27017,ac-gcqxrno-shard-00-02.jryq6qx.mongodb.net:27017/${config.mongo.DB}?ssl=true&replicaSet=atlas-ihjz5p-shard-0&authSource=admin&retryWrites=true&w=majority`);
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/cart', cartsRouter);

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'API E-commerce de coder',
            description: 'Esta es una api creada para un e commerce realizado en el curso de coder',
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
const specs = swaggerJsdoc(swaggerOptions);

app.use('/api/docs', swaggerUiExpress.serve,swaggerUiExpress.setup(specs));

const server = app.listen(process.env.PORT, () => console.log('Listening'));



