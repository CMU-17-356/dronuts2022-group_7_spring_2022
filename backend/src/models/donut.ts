import mongoose, { Schema, Model, Document, Query, connect, model } from 'mongoose';

export interface DonutInterface extends Document
{
    name : string;
    description : string;
    image : string; // path to donut images saved
    price : number; 
    quantity : number; //  number of donuts in inventory
}; 

const donutSchema = new Schema<DonutInterface>(
    {
        name : { type: String, required: true }, 
        description: String, 
        image : String, // path to donut images saved
        price: Number, 
        quantity: Number, //  number of donuts in inventory
     });


interface donutQueryHelpers {
    byName(name: string): Query<any, Document<DonutInterface>> & donutQueryHelpers;
    byDescription(description: string): Query<any, Document<DonutInterface>> & donutQueryHelpers;
    byPriceRange(upper: number, lower: number): Query<any, Document<DonutInterface>> & donutQueryHelpers;
}

donutSchema.query.byName = function(name: string): Query<any, Document<DonutInterface>> & donutQueryHelpers {
    return this.find({ name: name });
};

donutSchema.query.byDescription = function(description: string): Query<any, Document<DonutInterface>> & donutQueryHelpers {
    return this.find({ description: description });
};

donutSchema.query.byPriceRange = function(upper: number, lower: number): Query<any, Document<DonutInterface>> & donutQueryHelpers {
    return this.find({ price: { $gte: lower, $lte: upper } });
};



export const DonutModel: Model<DonutInterface> = mongoose.model<DonutInterface>('Donut', donutSchema);
