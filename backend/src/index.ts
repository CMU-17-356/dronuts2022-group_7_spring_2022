import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { DonutModel, DonutInterface } from './models/donut';
import * as donut_controllers from './controllers/donut_controllers';
import * as order_controllers from './controllers/order_controllers';
import cors from 'cors';

const app = express();


const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Donut Controllers
app.get('/donuts',cors(), donut_controllers.listAllDonuts
);

app.get('/donuts/:id', cors(),donut_controllers.getDonutById
);

app.put('/donuts/', cors(),donut_controllers.createDonut
);

app.post('/donuts/', cors(),donut_controllers.createDonut
);

app.put('/donuts/:id', cors(),donut_controllers.upsertDonutById
);


app.delete('/donuts/:id', cors(),donut_controllers.deleteDonutById
);

app.delete('/donuts', cors(), donut_controllers.deleteDonutByName
);

// Customer Controllers

// Employee Controllers

// Orders
app.get('/orders', cors(), order_controllers.listAllOrders
);

app.get('/orders/active', cors(), order_controllers.getActiveOrder
);

app.get('/orders/by_id/:id', cors(), order_controllers.getOrderById
);

app.get('/orders/incomplete', cors(), order_controllers.listIncompleteOrders
);

app.get('/orders/pending', cors(), order_controllers.listPendingOrders
);

app.get('/orders/past', cors(),order_controllers.listPastOrders
);

app.put('/orders/', cors(),order_controllers.createOrder
);

// Not necessarily deprecated but shouldn't use
app.put('/orders/add_quantity/:id', cors(),order_controllers.AddQuantityById
);

// Not necessarily deprecated but shouldn't use
app.put('/orders/add_item/:id', cors(), order_controllers.AddItemById
);

app.post('/orders/add_donuts/:id', cors(),order_controllers.AddDonutList
);

app.post('/orders/', cors(),order_controllers.createOrder
);

app.put('/orders/:id', cors(),order_controllers.upsertOrderById
);

app.post('/orders/:id', cors(),order_controllers.upsertOrderById
);

app.delete('/orders/:id', cors(),order_controllers.deleteOrderById
);

app.delete('/orders/remove_item/:id', cors(),order_controllers.RemoveItemById
);


app.listen(port, () => {
  console.log('Dronuts-App listening on localhost:' + port);
});

main().catch(err => console.log(err));

async function main() {
  const uri = "mongodb+srv://ruitaol:3Q1T5l5ZK3gahNxe@cluster0.t124k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  await mongoose.connect(uri);
}