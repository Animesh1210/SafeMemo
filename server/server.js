const PORT = 3001;
const express = require("express");
const app= express();
const pool= require('./db.js')
app.get('/todos',async (req,res)=>{
    try{
     const todos= await pool.query('SELECT * FROM todos') ;//get all table contents
      res.json(todos.rows)
    }
    catch(err)
    {
        console.log(err);
    }
})






app.listen(PORT,()=> `Server Running on ${PORT}`);