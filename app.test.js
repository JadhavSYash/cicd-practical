// app.test.js
const request = require('supertest');
const app = require('./app');

describe("GET /", () => {
  it("should return Hello, CI/CD Pipeline!", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, CI/CD Pipeline!");
    expect(response.statusCode).toBe(200);
  });
});