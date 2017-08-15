const express = require('express');
const series = require('../data/series.json');

const router = express.Router();

router.get('/', (req, res) => {
  const { from, to } = req.query;
  const data = series.filter(({ date }) => {
    if (from && date < from) {
      return false;
    }
    if (to && date > to) {
      return false;
    }
    return true;
  });
  res.send(data);
});

module.exports = router;
