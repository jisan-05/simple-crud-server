const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Simple Crud is running')
})

app.listen(port,()=>{
    console.log(`Simple crud is running in port : ${port}`)
})