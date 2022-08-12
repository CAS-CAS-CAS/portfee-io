const express = require('express');
const app = express()
const port = 3001;

app.listen(port, ()=>{console.log(`Listening in on  port ${port}`)});
app.use(express.static('public'));
