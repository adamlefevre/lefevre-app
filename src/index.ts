import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Hello, world!`);
});

const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
