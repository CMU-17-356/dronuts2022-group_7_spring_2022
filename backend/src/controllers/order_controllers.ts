import { Request, Response } from "express";
import { OrderModel, OrderInterface } from '../models/order';
import { DonutModel, DonutInterface } from '../models/donut';

export let listAllOrders = (req: Request, res: Response) => {
  let orders = OrderModel.find({}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export let getOrderById = (req: Request, res: Response) => {
  let donut = OrderModel.findOne({_id: req.params.id}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export let listIncompleteOrders = (req: Request, res: Response) => {
  let orders = OrderModel.find({time_picked: null, time_delivered: null, time_placed: null}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export let listPendingOrders = (req: Request, res: Response) => {
  var date_now = new Date();
  let orders = OrderModel.find({time_picked: null, time_delivered: null, time_placed: {$lte: date_now}}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export let listPastOrders = (req: Request, res: Response) => {
  // Current date and time
  var date_now = new Date();
  let orders = OrderModel.find({time_delivered: {$lt: date_now} }, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export let upsertOrderById = (req: Request, res: Response) => {
  let order = OrderModel.findOneAndUpdate({ _id:req.params.id}, req.body, {new: true, upsert: true}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send("Successfully Upserted Order with _id "+ result._id );
    }
  });
};

export let AddItemOrderById = async (req: Request, res: Response) => {
  let order_update = OrderModel.updateOne({ _id:req.params.id}, {$push : {donuts: {"donut_id": req.body.donut_id, "quantity": req.body.quantity }}}, {new: true, upsert: true}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send("Successfully Added Donut " + req.body.donut_id + " to order " + req.params.id);
    }
  });
   
  let updated_object = await OrderModel.findOne({ _id:req.params.id});

  let updated_donuts: any = updated_object?.donuts;

  let final_cost = 0;
  for (let i = 0; i < updated_donuts.length; i++){
    let donut :any = await DonutModel.findById(updated_donuts[i].donut_id)
    final_cost = final_cost + donut.cost * updated_donuts[i].quantity;
    }
 
  let cost_update = OrderModel.updateOne({ _id:req.params.id}, { price: final_cost }, {new: true, upsert: true}, (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send("Successfully Added Donut " + req.body.donut_id + " to order " + req.params.id);
    }
  });


};




export let createOrder = (req: Request, res: Response) => {
  let donut = new OrderModel(req.body);
  donut.save(async (err: any, result: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send("Successfully Created Order with _id "+ result._id );
    }
  });
};

export let deleteOrderById = (req: Request, res: Response) => {
  let donut = OrderModel.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(req.body);
      res.status(200).send("Successfully Deleted Order" );
    }
  });
};

// Returns the current cart orders NEED AWAIT
// export let currentCartOrders = (req: Request, res: Response) => {
//     let filter = { _id:req.params.id};
//     let update = req.body;
//     let order = OrderModel.findOneAndUpdate(filter, update, {new: true}, (err: any, result: any) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     });
// };