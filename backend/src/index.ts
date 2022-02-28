import express, { response } from 'express';
import bodyParser from 'body-parser';
import { DonutModel, DonutInterface } from './models/donut';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/donuts', async (req, res) => {
  const donut: DonutInterface = new DonutModel();
  donut.name = 'Cursed Donut';
  donut.description = "Insert cursed caption";
  donut.image = "image";
  donut.price = 0;
  donut.quantity = 0;
  // save test post to in-memory db
  await donut.save();
  const donuts = DonutModel.find().exec();
  res.send(donuts);
  console.log(donuts);
});

app.listen(port, () => {
  console.log('Dronuts-App listening on localhost:${port}');
});

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}