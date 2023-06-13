const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const chief = require('./data.json');


app.get('/',(req, res)=>{
    res.send('nazmul kitchen server is running');
});
app.use(cors());

app.get('/home',(req , res)=>{
    res.send(chief);
})

app.get('/:id', (req, res)=>{
    const _id = req.params.id;
    const selectedChief = chief.find(n=> n.id === _id);
    res.send(selectedChief);
})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
});