const express = require('express');
const cors = require('cors');
const { db } = require('./config');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/customer', require('./routes/customer'));
app.get('*', (req, res) => {
    res.send('404 Not Found');
});

if (db) {
    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
}