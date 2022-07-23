const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

/*
 API
*/

app.get("/api",(req,res)=>{
    res.json({message: "Hello Bos Ini sample api ya"});
});
app.listen(PORT,()=>{
    console.log(`Server jalan di port ${PORT}`);
})