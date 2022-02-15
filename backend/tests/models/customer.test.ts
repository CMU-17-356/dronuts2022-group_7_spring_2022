import * as testDB from '../utility';

import { CustomerModel, CustomerInterface } from '../../src/models/customer';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Customer test', function () {
  it('should take on assigned values', () => {
    const m = new CustomerModel();
    m.username = 'Test UserName';
    m.password = 'Password';
    m.full_name = "John Snow"
    m.addresses = ["123 Forbes Ave", "321 Murray Ave"]
    expect(m.username).toEqual('Test UserName');
    expect(m.password).toEqual('Password');
    expect(m.full_name).toEqual('John Snow');
    expect(m.addresses).toContain("123 Forbes Ave");
    expect(m.addresses).toContain("321 Murray Ave");

  });

  it('can be created correctly', async () => {
    // expect that two assertions will be made
    expect.assertions(3);
    // create new post model instance
    const customer: CustomerInterface = new CustomerModel();
    // set some test properties
    customer.username = 'Test UserName';
    customer.password = 'Password';
    customer.full_name = "John Snow"
    customer.addresses = ["123 Forbes Ave", "321 Murray Ave"]
    // save test post to in-memory db
    await customer.save();
    // find inserted post by title
    const CustomerInDb: CustomerInterface | null = await CustomerModel.findOne({
        username: 'Test UserName',
    }).exec();
    console.log('Customer found from memory-db', CustomerInDb);
    // check that title is expected
    expect(CustomerInDb).toBeDefined();
    if (CustomerInDb) {
        expect(customer.username).toEqual('Test UserName');
        expect(customer.password).toEqual('Password');
        expect(customer.full_name).toEqual('John Snow');
        expect(customer.addresses).toContain("123 Forbes Ave");
        expect(customer.addresses).toContain("321 Murray Ave");
    }
  });
});