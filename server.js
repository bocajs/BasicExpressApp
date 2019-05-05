const http = require("http"); 
const express = require("express"); 
const app = express();
app.set('view engine', 'ejs'); 
const port =  5000; ;

app.get("/",(req,res)=> {
    let TodaysDateAndTime = new Date();
    let TodaysDate = TodaysDateAndTime.toLocaleDateString();
    let TodaysTime =  TodaysDateAndTime.toLocaleTimeString();    
    res.render('./index.ejs', {TodaysDate:TodaysDate,TodaysTime:TodaysTime});
    res.end();
});


app.use(express.static(__dirname + "/"));
var server = http.createServer(app); 
server.listen(port); // Point it to the port we defined above.
console.log("server up on http://localhost:"  +port);