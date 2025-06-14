const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


// Express server setup
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(cors());


// Import Routes
const routes = require('./routes/routes');
// Testing Routes
app.use('/test', (req, res) => {
  res.send('Hello World');
});
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`Chatbot is running on port ${PORT}`)
);
