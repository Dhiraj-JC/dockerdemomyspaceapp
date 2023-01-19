const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/students',(req,res)=> {
    res.json([
        {name: 'John', age: 56},
        {name: 'Smith', age: 40},
        {name: 'Dhiraj', age: 30},
        {name: 'Rati', age: 45},
        {name: 'Gul', age: 23},
    ]);
});

app.get('/error',(req,res)=> {
    process.exit(1);
});

app.listen(7000,()=> {
    console.log('listening on port 7000');
});