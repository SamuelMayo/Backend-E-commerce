import  express  from "express";
import handlebars from 'express-handlebars';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import __dirname from "./utils.js";
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js'
import productsRouter from './routes/products.router.js'
import config from "./config/config.js";

const app = express();

const connection= mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@codercluster.jryq6qx.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`);
app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use(cookieParser());

app.use('/',viewsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/products', productsRouter);


const server = app.listen(process.env.PORT,() =>console.log('Listening'));