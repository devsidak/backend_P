const http = require("http");
var path = require("path");
var fs = require("fs");

const PORT = 4000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    const html = fs.readFileSync("views/form.html");
    // console.log("Form Method - ", html);
    console.log("Form Method / ");
    res.setHeader("Content-Type", "text/html");
    res.write(html);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    console.log("Message Method");
    const body = [];
    var message = "";

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  // console.log(req);
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>NodeJs</title><body><h1>NodeJs</h1></body></html>"
  );
  res.end();
});

server.listen(PORT);
