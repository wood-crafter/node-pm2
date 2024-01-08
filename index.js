const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');
let requestCount = 0;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  requestCount++;

  return res.json({
    message: 'Hello World 3',
    numberOfCall: requestCount,
  });
});

app.listen(PORT, () => {
  console.log(`Application started on URL ${HOST}:${PORT} ?`);
});