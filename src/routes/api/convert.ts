import express from 'express';
import csv from 'csvtojson';
//import fs from 'fs';

const convert = express.Router();
const csvFilePath = './users.csv';

convert.get('/', (req, res) => {
  const convertFile = async () => {
    const jsonArr = await csv().fromFile(csvFilePath);
    return jsonArr;
  };
  res.send(convertFile());
});

export default convert;
