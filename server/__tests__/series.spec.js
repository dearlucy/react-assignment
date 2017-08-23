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
      .expect(200, [
        { date: '2017-08', value: 7451, goal: 6155, country: 'Finland' },
        { date: '2017-08', value: 3636, goal: 4378, country: 'Denmark' },
        { date: '2017-08', value: 7987, goal: 6995, country: 'Germany' },
        { date: '2017-08', value: 3112, goal: 5035, country: 'Spain' }
      ]);
  });

  it('filters series with to', async () => {
    await request(app)
      .get('/series')
      .query({ to: '2016-01' })
      .expect(200, [
        { date: '2016-01', value: 4950, goal: 6460, country: 'Finland' },
        { date: '2016-01', value: 6059, goal: 4667, country: 'Denmark' },
        { date: '2016-01', value: 8942, goal: 7041, country: 'Germany' },
        { date: '2016-01', value: 8794, goal: 6760, country: 'Spain' }
      ]);
  });

  it('filters series with from and to', async () => {
    await request(app)
      .get('/series')
      .query({ from: '2016-12', to: '2017-01' })
      .expect(200, [
        { date: '2016-12', value: 9000, goal: 3798, country: 'Finland' },
        { date: '2016-12', value: 3536, goal: 3215, country: 'Denmark' },
        { date: '2016-12', value: 4049, goal: 6523, country: 'Germany' },
        { date: '2016-12', value: 5974, goal: 4362, country: 'Spain' },
        { date: '2017-01', value: 6644, goal: 5222, country: 'Finland' },
        { date: '2017-01', value: 6046, goal: 6472, country: 'Denmark' },
        { date: '2017-01', value: 4824, goal: 7024, country: 'Germany' },
        { date: '2017-01', value: 4972, goal: 6394, country: 'Spain' }
      ]);
  });
});
