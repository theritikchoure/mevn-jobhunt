const request = require('supertest');
const server = `http://localhost:4000`;

describe('Internship APIs', () => {

  it('GET /api/interships  --> get internships', () => {
    return request(server)
      .get('/api/internships')
      .expect(200)
      .then((response) => {
          expect(response.body.status).toBe("ok");
          expect(response.body.data).toEqual(expect.arrayContaining([
              expect.objectContaining({
                  title: expect.any(String)
              })
          ]))
      });
  });
  
  it('GET /api/interships/id  --> get internships with id', () => {
    return request(server)
      .get('/api/internships')
      .expect(200)
      .then((response) => {
          expect(response.body.status).toBe("ok");
          expect(response.body.data).toEqual(expect.arrayContaining([
              expect.objectContaining({
                  title: expect.any(String)
              })
          ]))
      });
  });


});
