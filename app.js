const express = require('express');
const app = express();

app.get('/get-employees', (req,res)=>{
    res.json({
        message: "Employees Data Retrieved"
    })
})

const port =4000;
app.listen(4001, ()=>{
    console.log("Server is running")
})
