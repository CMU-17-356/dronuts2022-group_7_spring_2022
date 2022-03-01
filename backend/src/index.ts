import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { DonutModel, DonutInterface } from './models/donut';
import * as donut_controllers from './donut_controllers';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/donuts', donut_controllers.listAllDonut
);


app.listen(port, () => {
  console.log('Dronuts-App listening on localhost:{port}');
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}