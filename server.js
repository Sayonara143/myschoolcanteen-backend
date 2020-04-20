import express from 'express'
import http from 'http'
import path from 'path'
import cookieParser from'cookie-parser'
import logger from 'morgan'
import  mainRouter from './app/routers/router'
//npmimport { createIOsocket } from './app/services/socket';
// import indexRouter from './routes/index'
// import usersRouter from './routes/users'mongodb://localhost:27017/myschoolcanteen
import mongoose  from 'mongoose'
import cors from 'cors'

mongoose.connect("mongodb://localhost:27017/myschoolcanteen", { useNewUrlParser: true, useUnifiedTopology: true },  () => {
	console.log("[MONGODB] connect")
})

const app = express();
// app.use(function(req, res, next) {"mongodb+srv://AlexBykov:<alexbykov123school>@myschoolcanteen-dan2k.mongodb.net/test?retryWrites=true&w=majority
// 	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// 	});

app.use(cors())
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static( 'public'));
app.use(mainRouter);


	// app.use('/', indexRouter);
	// app.use('/users', usersRouter);

const server = http.createServer(app);

//createIOsocket(server);


server.listen(8080, '0.0.0.0');