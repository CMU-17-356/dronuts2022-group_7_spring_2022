import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { DonutModel, DonutInterface } from './models/donut';
import * as donut_controllers from './controllers/donut_controllers';
import * as order_controllers from './controllers/order_controllers';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Donut Controllers
app.get('/donuts', donut_controllers.listAllDonuts
);

app.get('/donuts/:id', donut_controllers.getDonutById
);

app.put('/donuts/', donut_controllers.createDonut
);

app.post('/donuts/', donut_controllers.createDonut
);

app.put('/donuts/:id', donut_controllers.upsertDonutById
);


app.delete('/donuts/:id', donut_controllers.deleteDonutById
);

app.delete('/donuts', donut_controllers.deleteDonutByName
);

// Customer Controllers

// Employee Controllers

// Orders
app.get('/orders', order_controllers.listAllOrders
);

app.get('/orders/by_id/:id', order_controllers.getOrderById
);

app.get('/orders/incomplete', order_controllers.listIncompleteOrders
);

app.get('/orders/pending', order_controllers.listPendingOrders
);

app.get('/orders/past', order_controllers.listPastOrders
);

app.put('/orders/', order_controllers.createOrder
);

app.put('/orders/add_quantity/:id', order_controllers.AddQuantityById
);

app.put('/orders/add_item/:id', order_controllers.AddItemById
);

app.post('/orders/', order_controllers.createOrder
);

app.put('/orders/:id', order_controllers.upsertOrderById
);

app.post('/orders/:id', order_controllers.upsertOrderById
);

app.post('/orders/:id', order_controllers.upsertOrderById
);

app.delete('/orders/:id', order_controllers.deleteOrderById
);

app.listen(port, () => {
  console.log('Dronuts-App listening on localhost:{port}');
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}