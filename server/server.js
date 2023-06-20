const PORT = 3001;
const express = require("express");
const app= express();
app.get('/',(req,res)=>{
res.send("HELLO")
})






app.listen(PORT,()=> `Server Running on ${PORT}`);