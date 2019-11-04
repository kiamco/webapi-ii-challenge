const express = require('express');
const sever = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.send(`
    <h2>Api working</h>
  `);
});

server.listen(4000, () => {
     console.log('\n*** Server Running on http://localhost:4000 ***\n');
})