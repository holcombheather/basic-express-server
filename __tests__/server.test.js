'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('proof of life');
  });

  test('handles success route', async () => {
    const response = await mockRequest.get('/success');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Success!');
  });

  test('404 on a bad route', async () => {
    const response = await mockRequest.get('/persons');
    expect(response.status).toEqual(404);
  });

  test('404 on a bad method', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toEqual(404);
  });

  test('500 if no name in the query string', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });

  test('200 if the name is in the query string', async () => {
    const response = await mockRequest.get('/person?name=test');
    expect(response.status).toEqual(200);
  });

  test('Given a name in the query string, the output object is correct', async () => {
    const response = await mockRequest.get('/person?name=test');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name: 'test'});
  });

});
