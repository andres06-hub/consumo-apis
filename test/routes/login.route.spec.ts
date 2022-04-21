import app from '../../src/app';
import request from 'supertest';

//Test fot login routes
describe('Login routes', () => {
    //Test for GET methods
    describe('GET methods', () => {
        it("responds with status 200", async () => {
            const response = await request(app)
            .get('/login')
            .send();
            expect(response.status).toBe(200);
        });
        it("responds with msg property", async() => {
            const response = await request(app)
            .get('/login')
            .send();
            expect(response.status).toBe(200);
            expect(response.body.msg).toBeTruthy();
        });
        it("responds msg with \"GET LOGIN\"", async() => {
            const response = await request(app)
            .get('/login')
            .send();
            expect(response.status).toBe(200);
            expect(response.body.msg).toBeTruthy();
            expect(response.body.msg).toBe("LOGIN GET");
        });
    });
    //Test for POST methods
    describe('POST methods', ()=>{
        it('Responds witn a JSON', async ()=>{
            const response = await request(app)
            .post('/login')
            .send();
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            // expect('Contend-Type', /json/)
            // expect(response.status).toBe(401);
        });
        it('Responds with a status 200', async ()=>{
            const response = await request(app)
            .post('/login')
            .send()
            .query({
                email:'maria@gmail.com',
                password: '12345678'
            })
            // console.log(response);
            expect(response.status).toBe(200);
        })
        ////////////////////////////////
        //Validated error
        describe('ERRORS POST methods', () => {
            it('should show a status 401', async () => {
                
            })
        })

    })
});