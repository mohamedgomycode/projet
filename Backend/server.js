const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello project");
  
});

app.use(express.static(__dirname + "/Backend"));



app.listen(5000, (err) => {
 


  if (err) console.log("server is not running");
  else console.log("server is running on port 5000");
});
