import * as testDB from '../utility';

import mongoose from "mongoose";

import { FeedbackModel, FeedbackInterface } from '../../src/models/feedback';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Feedback test', function () {
    const new_obj_id1 = new mongoose.Types.ObjectId();
    const new_obj_id2 = new mongoose.Types.ObjectId();
  it('should take on assigned values', () => {
    const feedback = new FeedbackModel();
    
    feedback.customer_id = new_obj_id1;
    feedback.order_id = new_obj_id2;
    feedback.rating = 3.9;
    feedback.feedback = "Was amazing. Will order again. Maybe.";
    console.log(feedback.customer_id);
    expect(feedback.customer_id).toEqual(new_obj_id1);
    expect(feedback.order_id).toEqual(new_obj_id2);
    expect(feedback.rating).toEqual(3.9);
    expect(feedback.feedback).toEqual("Was amazing. Will order again. Maybe.");

  });

  it('can be created correctly', async () => {
    // expect that two assertions will be made
    // expect.assertions(6);
    // create new post model instance
    const feedback: FeedbackInterface = new FeedbackModel();
    // set some test properties
    feedback.customer_id = new_obj_id1;
    feedback.order_id = new_obj_id2;
    feedback.rating = 3.9;
    feedback.feedback = "Was amazing. Will order again. Maybe.";
    // save test post to in-memory db
    await feedback.save();
    // find inserted post by title
    const FeedbackInDb: FeedbackInterface | null = await FeedbackModel.findOne({
        username: 'Test UserName',
    }).exec();
    console.log('Feedback found from memory-db', FeedbackInDb);
    // check that title is expected
    expect(FeedbackInDb).toBeDefined();
    if (FeedbackInDb) {
        expect(feedback.customer_id).toEqual(new_obj_id1);
        expect(feedback.order_id).toEqual(new_obj_id2);
        expect(feedback.rating).toEqual(3.9);
        expect(feedback.feedback).toEqual("Was amazing. Will order again. Maybe.");
    }
  });
});
