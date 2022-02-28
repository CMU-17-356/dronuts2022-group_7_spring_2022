import express from 'express';
import bodyParser from 'body-parser';
import { DonutModel } from './models/donut';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/donuts', (req, res) => {
  const donuts = DonutModel.find().lean()
  console.log(donuts)
});

app.listen(port, () => {
  console.log('Dronuts-App listening on localhost:${port}');
});

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}