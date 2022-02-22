import * as testDB from '../utility';

import { DonutModel, DonutInterface } from '../../src/models/donut';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Donut test', function () {
  it('should take on assigned values', () => {
    const m = new DonutModel();
    m.name = 'Cursed Donut';
    m.description = "Insert cursed caption";
    m.image = "image";
    m.price = 0;
    m.quantity = 0;
    expect(m.name).toEqual('Cursed Donut');
    expect(m.description).toEqual('Insert cursed caption');
    expect(m.image).toEqual("image");
    expect(m.price).toEqual(0);
    expect(m.quantity).toEqual(0);

  });

  it('can be created correctly', async () => {
    // expect that two assertions will be made
    // expect.assertions(6);
    // create new post model instance
    const donut: DonutInterface = new DonutModel();
    // set some test properties
    donut.name = 'Cursed Donut';
    donut.description = "Insert cursed caption";
    donut.image = "image";
    donut.price = 0;
    donut.quantity = 0;
    // save test post to in-memory db
    await donut.save();
    // find inserted post by title
    const DonutInDb: DonutInterface | null = await DonutModel.findOne({
        name: 'Cursed Donut',
    }).exec();
    console.log('Donut found from memory-db', DonutInDb);
    // check that title is expected
    expect(DonutInDb).toBeDefined();
    if (DonutInDb) {
        expect(donut.name).toEqual('Cursed Donut');
        expect(donut.description).toEqual("Insert cursed caption");
        expect(donut.image).toEqual("image");
        expect(donut.price).toEqual(0);
        expect(donut.quantity).toEqual(0);
    }
  });
});