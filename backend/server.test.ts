// backend/server.test.ts
import request from "supertest";
import app from "./server"; // Import your express app

describe("GET /api.xro/2.0/Reports/BalanceSheet", () => {
  it("should return balance sheet data", async () => {
    const res = await request(app).get("/api.xro/2.0/Reports/BalanceSheet");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("balanceSheet");
  });
});
