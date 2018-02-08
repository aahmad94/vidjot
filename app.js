const express = require('express');
const app = express();
const port = 5000;
app.listen(port, () => {
    console.log(`Console started on port ${port}`);
});


// Index Route

app.get('/', (req, res) => {
    res.send('INDEX');
});   

// About Route

app.get('/about', (req, res) => {
    res.send('ABOUT');
});   