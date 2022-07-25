const express = require("express");
const app = express();

app.get("/", function(request, response){
    // console.log(request);
    response.send("<h1>Hello Naveen</h1>");
})

app.get("/contact", function(req,res){
    res.send("palanaveen707@gmail.com");
})
app.listen(3000, function(){
    console.log("Server started running");
});