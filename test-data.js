const jsonfile = require('jsonfile'),
  moment = require('moment'),
  _ = require('lodash');

const countries = ['Finland', 'Denmark', 'Germany', 'Spain'];
const dateFormat = 'YYYY-MM';
const startDate = moment().subtract(1, 'years').startOf('year');
const data = [];

function randomValue() {
  const max = 10000;
  const min = 3000;
  return Math.floor(Math.random() * (max - min) + min)
}

function randomSalesData(date, country) {
  return ({
    date: date.format(dateFormat),
    value: randomValue(),
    goal: randomValue(),
    country
  })
}

while (startDate.isSameOrBefore(moment(), 'month')) {
  countries.forEach(country => data.push(randomSalesData(startDate, country)));
  startDate.add(1, 'month');
}

jsonfile.writeFileSync('./server/data/series.json', data);
