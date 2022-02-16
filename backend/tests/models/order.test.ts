import * as testDB from '../utility';

import mongoose from "mongoose";

import { OrderModel, OrderInterface } from '../../src/models/order';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Order test', function () {
    const new_customer_id = new mongoose.Types.ObjectId();
    const new_drone_id = new mongoose.Types.ObjectId();
    const new_donut_id_1 = new mongoose.Types.ObjectId();
    const new_donut_id_2 = new mongoose.Types.ObjectId();
    const donut_1 = {donut_id: new_donut_id_1, quantity: 5};
    const donut_2 = {donut_id: new_donut_id_2, quantity: 7};
    const a_date = new Date();
  it('should take on assigned values', () => {
    const order = new OrderModel();
    
    order.customer_id = new_customer_id;
    order.donuts = [donut_1, donut_2];
    order.drone_id = new_drone_id;
    order.time_placed = a_date;
    order.time_picked = a_date;
    order.time_delivered = a_date;
    console.log(order.customer_id);
    expect(order.customer_id).toEqual(new_customer_id);
    expect(order.donuts[0].donut_id).toBe(new_donut_id_1);
    expect(order.donuts[0].quantity).toBe(5);
    expect(order.donuts[1].donut_id).toBe(new_donut_id_2);
    expect(order.donuts[1].quantity).toBe(7);
    expect(order.time_placed).toEqual(a_date);
    expect(order.time_picked).toEqual(a_date);
    expect(order.time_delivered).toEqual(a_date);
  });

  it('can be created correctly', async () => {
    // expect that two assertions will be made
    // expect.assertions(6);
    // create new post model instance
    const order: OrderInterface = new OrderModel();
    // set some test properties
    order.customer_id = new_customer_id;
    order.donuts = [donut_1, donut_2];
    order.drone_id = new_drone_id;
    order.time_placed = a_date;
    order.time_picked = a_date;
    order.time_delivered = a_date;
    // save test post to in-memory db
    await order.save();
    // find inserted post by title
    const OrderInDb: OrderInterface | null = await OrderModel.findOne({
        username: 'Test UserName',
    }).exec();
    console.log('Order found from memory-db', OrderInDb);
    // check that title is expected
    expect(OrderInDb).toBeDefined();
    if (OrderInDb) {
        expect(order.customer_id).toEqual(new_customer_id);
        expect(order.donuts[0].donut_id).toBe(new_donut_id_1);
        expect(order.donuts[0].quantity).toBe(5);
        expect(order.donuts[1].donut_id).toBe(new_donut_id_2);
        expect(order.donuts[1].quantity).toBe(7);
        expect(order.time_placed).toEqual(a_date);
        expect(order.time_picked).toEqual(a_date);
        expect(order.time_delivered).toEqual(a_date);    }
  });
});
