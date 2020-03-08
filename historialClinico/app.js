const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
mongoose.connect('mongodb://localhost/API', { useNewUrlParser: true});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose.set('useCreateIndex', true);
//Routes

app.use('/', require('./routes/product'));



// Serve static assets if in production
if (process.env.NODE_ENV === 'dev') {
  // Set static folder
  app.use(express.static('client/public'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port`));