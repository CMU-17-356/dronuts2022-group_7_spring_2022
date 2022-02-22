import * as testDB from '../utility';

import { EmployeeModel, EmployeeInterface } from '../../src/models/employee';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Employee test', function () {
  it('should take on assigned values', () => {
    const m = new EmployeeModel();
    m.username = 'Test UserName';
    m.password = 'Password';
    m.full_name = "John Snow";
    m.position = "Manager";
    expect(m.username).toEqual('Test UserName');
    expect(m.password).toEqual('Password');
    expect(m.full_name).toEqual('John Snow');
    expect(m.position).toEqual("Manager");
  });

  it('can be created correctly', async () => {
    // expect that two assertions will be made
    // expect.assertions(6);
    // create new post model instance
    const employee: EmployeeInterface = new EmployeeModel();
    // set some test properties
    employee.username = 'Test UserName';
    employee.password = 'Password';
    employee.full_name = "John Snow";
    employee.position = "Manager";
    // save test post to in-memory db
    await employee.save();
    // find inserted post by title
    const EmployeeInDb: EmployeeInterface | null = await EmployeeModel.findOne({
        username: 'Test UserName'
    }).exec();
    console.log('Employee found from memory-db', EmployeeInDb);
    // check that title is expected
    expect(EmployeeInDb).toBeDefined();
    if (EmployeeInDb) {
        expect(employee.username).toEqual('Test UserName');
        expect(employee.password).toEqual('Password');
        expect(employee.full_name).toEqual('John Snow');
        expect(employee.position).toEqual('Manager');
    }
  });
});