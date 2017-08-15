const app = require('./app');
const logger = require('./logger');

const PORT = 8000;

app.listen(PORT, () => {
  logger.info(`Server listening on ${PORT}`);
});
