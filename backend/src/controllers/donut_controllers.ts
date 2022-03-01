import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { DonutModel, DonutInterface } from '../models/donut';

export let listAllDonuts = (req: Request, res: Response) => {
    let donut = DonutModel.find({}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
};

export let upsertDonut = (req: Request, res: Response) => {
    let filter = { _id:req.params.id};
    let update = req.body;
    let donut = DonutModel.findOneAndUpdate(filter, update, {new: true}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
};

export let deleteDonutById = (req: Request, res: Response) => {
    let donut = DonutModel.deleteOne({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully Deleted Book");
      }
    });
};




