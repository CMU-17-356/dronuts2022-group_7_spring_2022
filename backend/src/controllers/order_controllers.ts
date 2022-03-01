import { Request, Response } from "express";
import { OrderModel, OrderInterface } from '../models/order';

export let listAllOrders = (req: Request, res: Response) => {
    let orders = OrderModel.find({}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
};

export let listPendingOrders = (req: Request, res: Response) => {
    let orders = OrderModel.find({time_picked: null, time_delivered: null}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
};

export let listPastOrders = (req: Request, res: Response) => {
    // Current date and time
    var date_now = new Date();
    let orders = OrderModel.find({time_delivered: {$lt: date_now} }, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
};

export let upsertOrders = (req: Request, res: Response) => {
    let filter = { _id:req.params.id};
    let update = req.body;
    let order = OrderModel.findOneAndUpdate(filter, update, {new: true}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
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