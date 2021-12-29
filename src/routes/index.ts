import express from 'express';
import students from './api/students';
import teachers from './api/teachers';
import convert from './api/convert';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main api route!');
});

routes.use('/students', students);
routes.use('/teachers', teachers);
routes.use('/convert', convert);

export default routes;
