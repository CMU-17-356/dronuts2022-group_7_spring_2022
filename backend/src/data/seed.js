// Connect to MongoDB via Mongoose
const { OrderModel } = require('../models/order.js');
const { DonutModel } = require('../models/donut.js');
const { DroneModel } = require('../models/drone.js');
const express = require('express');
const app = express()
const mongoose = require('mongoose');

const uri = "mongodb+srv://ruitaol:3Q1T5l5ZK3gahNxe@cluster0.t124k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
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
            {
                'donut_id' : "621e88a016dc040f2fee3183",
                'quantity': 1
            },
            {
                'donut_id' : "621e88c90db3439bca66cbf2",
                'quantity': 2
            }
            ],
            'drone_id': "621e8936389a8da299c79fcb",
            'cost': 40.1,
            "active": false
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
            'time_placed': new Date(),
            "active": false
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
            'time_placed': new Date(),
            "active": false
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
            'time_delivered': new Date(),
            "active": false
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
            'time_delivered': new Date(),
            "active": false
    }
];

const seedDrones = [
    {
        "_id": "621e8936389a8da299c79fcb",
        "orders": [],
        "battery": 0.7,
        "status": "recharging"
    }
    ]

const seedDonuts = [
    {
        "_id" : "621e88a016dc040f2fee3183",
        "name": "Strawberry Glazed Donut",
        "description": "A very tasty donut glazed with strawberry-flavored icing. Made with REAL strawberries!",
        "image": "/image/strawberry_glazed_donut.png",
        "price": 3.45,
        "quantity": 4
    },
    {
        "_id" : "621e88c90db3439bca66cbf2",
        "name": "Jelly Donut",
        "description": "A jelly donut. Made with REAL jelly!",
        "image": "/image/jelly_donut.jpg",
        "price": 3.45,
        "quantity": 4   
    },
    {
        "_id" : "621e88f0979b3e730945a891",
        "name": "Blueberry Glazed Donut",
        "description": "A blueberry donut. Made with REAL blueberries!",
        "image": "/image/blueberry_glazed_donut.jpg",
        "price": 3.45,
        "quantity": 4   
    }
]



const seedDB = async () => {
    await OrderModel.deleteMany({});
    await OrderModel.insertMany(seedProducts);
    await DonutModel.deleteMany({});
    await DonutModel.insertMany(seedDonuts);
    await DroneModel.deleteMany({});
    await DroneModel.insertMany(seedDrones);

};

seedDB().then(() => {
    mongoose.connection.close()
});