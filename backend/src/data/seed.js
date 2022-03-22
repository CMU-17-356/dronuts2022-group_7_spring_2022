// Connect to MongoDB via Mongoose
const { OrderModel } = require('../models/order.js');
const express = require('express');
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open');
    })
    .catch((err) => {
        console.log(err)
    });

const seedProducts = [
    {
        'donuts': [
            ],
            'drone_id': "621e8936389a8da299c79fcb",
            'cost': 40.1
    },
    {
        'donuts': [
            {
                'donut_id' : "621e88a016dc040f2fee3183",
                'quantity': 1
            },
            {
                'donut_id' : "621e88c90db3439bca66cbf2",
                'quantity': 3
            }
            ],
            'drone_id': "621e8936389a8da299c79fcb",
            'cost': 40.1,
            'time_placed': new Date()
    },
    {
        'donuts': [
            {
                'donut_id' : "621e88a016dc040f2fee3183",
                'quantity': 1
            },
            {
                'donut_id' : "621e88c90db3439bca66cbf2",
                'quantity': 1
            }
            ],
            'drone_id': "621e8936389a8da299c79fcb",
            'cost': 40.1,
            'time_placed': new Date()
    },
    {
        'donuts': [
            {
                'donut_id' : "621e88a016dc040f2fee3183",
                'quantity': 4
            },
            {
                'donut_id' : "621e88c90db3439bca66cbf2",
                'quantity': 4
            }
            ],
            'drone_id': "621e8936389a8da299c79fcb",
            'cost': 40.1,
            'time_placed': new Date(),
            'time_picked': new Date(),
            'time_delivered': new Date()
    },
    {
        'donuts': [
            {
                'donut_id' : "621e88a016dc040f2fee3183",
                'quantity': 5
            },
            {
                'donut_id' : "621e88c90db3439bca66cbf2",
                'quantity': 5
            }
            ],
            'drone_id': "621e8936389a8da299c79fcb",
            'cost': 40.1,
            'time_placed': new Date(),
            'time_picked': new Date(),
            'time_delivered': new Date()
    }
];

const seedDB = async () => {
    await OrderModel.deleteMany({});
    await OrderModel.insertMany(seedProducts);
};

seedDB().then(() => {
    mongoose.connection.close()
});