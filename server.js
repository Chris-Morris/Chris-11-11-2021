const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const products = require('./routes/api/products');



const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch((e) => console.log(e));

// Mount Router
app.use('/api/products', products);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`))