'use strict';

const validator = require('./validator');

describe('Validator middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn(); //this "mocks" the next function

  test('Calls next with error message if no name provided', () => {
    req.query = {};
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('Must have name property');
  });

  test('Calls next with no arguments if name provided', () => {
    req.query = { name: 'test' };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
