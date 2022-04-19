import app from '../src/app';
import request from 'supertest';

describe("Login routes", () => {
    describe("GET methods", () => {
        it("responds with status 200", async () => {
            const response = await request(app)
            .get('/login')
            .send();
            expect(response.status).toBe(200);
        });
        it("responds with msg property", async() => {
            const response = await request(app).get('/login').send();
            expect(response.status).toBe(200);
            expect(response.body.msg).toBeTruthy();
        });
        it("responds msg with \"GET LOGIN\"", async() => {
            const response = await request(app).get('/login').send();
            expect(response.status).toBe(200);
            expect(response.body.msg).toBeTruthy();
            expect(response.body.msg).toBe("LOGIN GET");
        });
    })
});