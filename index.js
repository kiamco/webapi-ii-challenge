const express = require('express');
const server = express();
const postRouter = require('./data/routes');

server.use(express.json());

server.use('/api/posts', postRouter)
server.get('/', (req, res) => {
    res.send(`
    <h2>Api working</h>
  `);
});

server.listen(4000, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
});