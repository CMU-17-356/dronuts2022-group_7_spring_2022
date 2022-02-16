import * as testDB from '../utility';
import { DroneModel, DroneInterface } from '../../src/models/drone';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Drone test', function () {
  it('should take on assigned values', () => {
    const m = new DroneModel();
    // NEED TO TEST FOR ORDERS LATER WHEN REFERENCES ARE SET UP
    m.orders = [];
    m.battery = 0;
    m.status = "recharging";
    expect(m.battery).toEqual(0);
    expect(m.status).toEqual("recharging");

  });

  it('can be created correctly', async () => {
    // expect that two assertions will be made
    // expect.assertions(6);
    // create new post model instance
    const Drone: DroneInterface = new DroneModel();
    // set some test properties
    // NEED TO TEST FOR ORDERS
    Drone.orders = [];
    Drone.battery = 0;
    Drone.status = "recharging";
    // save test post to in-memory db
    await Drone.save();
    // find inserted post by title
    const DroneInDb: DroneInterface | null = await DroneModel.findOne({
        status: "recharging"
    }).exec();
    console.log('Drone found from memory-db', DroneInDb);
    // check that title is expected
    expect(DroneInDb).toBeDefined();
    if (DroneInDb) {
        expect(Drone.battery).toEqual(0);
        expect(Drone.status).toEqual("recharging");
    }
  });
});