const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Testing an application running with kubernetes!');
});

app.get('/health', (request, response) => {
    response.send({
        status: 'UP',
        version: '1.0.0'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});