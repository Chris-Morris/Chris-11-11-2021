const express = require('express');
const bodyParser = require('body-parser');

const products = require('./routes/api/products');

const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require("./config/config").mongoURI;

// Mount Router
app.use('/api/products', products);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`))