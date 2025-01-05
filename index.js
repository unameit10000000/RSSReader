const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.redirect('/static/index.html');
});

app.get('/rss', async function (req, res) {
    const browserHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    };

    const url = req.query.url;
    const response = await axios.get(url, { headers: browserHeaders });

    if(response.status !== 200) {
        res.status(500).send('Error');
        return;
    }

    res.send(response.data);
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});