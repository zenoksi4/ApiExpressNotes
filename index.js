const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/samurais', (req, res) => {
    res.send('hello samurais');
    
})

app.post('/samurais', (req, res) => {
    res.send('We have created samurai');
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})