const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const faker = require("faker");

describe("User - create", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should create an user", async () => {
    const response = await request(app)
      .post("/create")
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      });

    expect(response.status).toBe(200);
  });

  it("should not create an user", async () => {
    const response = await request(app)
      .post("/create")
      .send({
        email: faker.internet.email(),
      });

    expect(response.status).toBe(400);
  });
});
