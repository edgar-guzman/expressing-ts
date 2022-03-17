import express from 'express';
const routes = require('./routes');
const HOSTNAME: string = 'localhost';
const app: express.Application = express();
const PORT: number = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀🗜  @ http://${HOSTNAME}:${PORT}/`);
});
