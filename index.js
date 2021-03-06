import express from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRouters.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const connString = process.env.connString

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/posts', postRouter);
app.use('/user', userRouter);

app.use(express.static('./client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/build/index.html'));
})

mongoose.connect(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => app.listen(port, () => console.log('Server is up and running on port ' + port)))
.catch(error => console.log(error));