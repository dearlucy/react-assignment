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
      .query({ from: '2020-08' })
      .expect(200, [
        { date: '2020-08', value: '4898', goal: '7566', country: 'Finland' },
        { date: '2020-08', value: '7693', goal: '8883', country: 'Denmark' },
        { date: '2020-08', value: '9540', goal: '5408', country: 'Germany' },
        { date: '2020-08', value: '5030', goal: '4808', country: 'Spain' },
        { date: '2020-09', value: '4176', goal: '7615', country: 'Finland' },
        { date: '2020-09', value: '3415', goal: '7328', country: 'Denmark' },
        { date: '2020-09', value: '6822', goal: '6626', country: 'Germany' },
        { date: '2020-09', value: '6882', goal: '3407', country: 'Spain' }
      ]);
  });

  it('filters series with to', async () => {
    await request(app)
      .get('/series')
      .query({ to: '2019-01' })
      .expect(200, [
        { date: '2019-01', value: '4236', goal: '8086', country: 'Finland' },
        { date: '2019-01', value: '5145', goal: '5649', country: 'Denmark' },
        { date: '2019-01', value: '3608', goal: '6054', country: 'Germany' },
        { date: '2019-01', value: '6302', goal: '7916', country: 'Spain' }
      ]);
  });

  it('filters series with from and to', async () => {
    await request(app)
      .get('/series')
      .query({ from: '2019-12', to: '2020-01' })
      .expect(200, [
        { date: '2019-12', value: '3232', goal: '4669', country: 'Finland' },
        { date: '2019-12', value: '9981', goal: '3934', country: 'Denmark' },
        { date: '2019-12', value: '7158', goal: '7554', country: 'Germany' },
        { date: '2019-12', value: '9866', goal: '6781', country: 'Spain' },
        { date: '2020-01', value: '4737', goal: '4623', country: 'Finland' },
        { date: '2020-01', value: '3654', goal: '3338', country: 'Denmark' },
        { date: '2020-01', value: '7840', goal: '5550', country: 'Germany' },
        { date: '2020-01', value: '4268', goal: '5509', country: 'Spain' }
      ]);
  });
});
