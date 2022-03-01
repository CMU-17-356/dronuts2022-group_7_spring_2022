import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { DonutModel, DonutInterface } from './models/donut';

export let listAllDonut = (req: Request, res: Response) => {
    let donut = DonutModel.find({}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
};

export let getDonutById = (req: Request, res: Response) => {
  let donut = DonutModel.findOne({_id: req.params.id}, (err: any, result: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};


export let upsertDonutById = (req: Request, res: Response) => {
    let donut = DonutModel.findOneAndUpdate({ _id:req.params.id}, req.body, {new: true, upsert: true}, (err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send("Successfully Upserted Donut with _id "+ result._id );
      }
    });
};

export let createDonut = (req: Request, res: Response) => {
  let donut = new DonutModel(req.body);
  donut.save(async (err: any, result: any) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send("Successfully Created Donut with _id "+ result._id );
    }
  });
};

export let deleteDonutById = (req: Request, res: Response) => {
    let donut = DonutModel.deleteOne({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        console.log(req.body);
        res.status(200).send("Successfully Deleted Donut" );
      }
    });
};

export let deleteDonutByName = (req: Request, res: Response) => {
  let donut = DonutModel.deleteOne({name: req.body.name }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      console.log(req.body);
      res.status(200).send("Successfully Deleted Book");
    }
  });
};



