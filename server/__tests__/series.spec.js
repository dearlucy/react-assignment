const request = require('supertest');
const app = require('../app');
const data = require('../data/series.json');

describe('GET /series', () => {
  it('returns series', async () => {
    await request(app)
      .get('/series')
      .expect(200, data);
  });

  it('filters series with from', async () => {
    await request(app)
      .get('/series')
      .query({ from: '2017-08' })
      .expect(200, [{
        date: '2017-08',
        value: 14010000,
        goal: 18797000
      }]);
  });

  it('filters series with to', async () => {
    await request(app)
      .get('/series')
      .query({ to: '2016-01' })
      .expect(200, [{
        date: '2016-01',
        value: 18418000,
        goal: 17929000
      }]);
  });

  it('filters series with from and to', async () => {
    await request(app)
      .get('/series')
      .query({ from: '2016-12', to: '2017-01' })
      .expect(200, [{
        date: '2016-12',
        value: 29731000,
        goal: 27504000
      }, {
        date: '2017-01',
        value: 28092000,
        goal: 28190000
      }]);
  });
});
