import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { DonutModel, DonutInterface } from './models/donut';
import * as donut_controllers from './controllers/donut_controllers';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//donut CRUD methods
app.get('/donuts', donut_controllers.listAllDonut
);

app.get('/donuts/:id', donut_controllers.getDonutById
);

app.put('/donuts/', donut_controllers.createDonut
);

app.put('/donuts/:id', donut_controllers.upsertDonutById
);

app.delete('/donuts/:id', donut_controllers.deleteDonutById
);

app.delete('/donuts', donut_controllers.deleteDonutByName
);

// Donut Controllers

// Customer Controllers

// Employee Controllers

// Orders

app.listen(port, () => {
  console.log('Dronuts-App listening on localhost:{port}');
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}