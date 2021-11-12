const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const products = require('./routes/api/products');

const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require("./config/config").mongoURI;

// Mount Router
app.use('/api/products', products);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`))