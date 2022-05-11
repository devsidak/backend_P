//serve-mp4.js
var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    console.log("Port Number : 3000");
    console.log("Request URL : " + req.url);
     res.writeHead(200, { "Content-Type": "video/mp4" });
    fs.exists("video.mp4", function (exists) {
      if (exists) {
        var rstream = fs.createReadStream("video.mp4");
        console.clear();
        rstream.pipe(res);
      } else {
        res.send("Its a 404");
        res.end();
      }
    });console.log("Request Method : " + req.method);
    console.count("URL");
    // change the MIME type to 'video/mp4'
   
  })
  .listen(3000);


//two ways https and http 

//In https data is encrypted, no one can interfere your data in between;