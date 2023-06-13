const http = require("http");
const port = 8000;
const fs = require("fs");

function requestHandler(req, res) {
  res.writeHead(200, { "Content-type": "text/html" });

  let path;
  switch (req.url) {
    case "/":
      path = "./index.html";
      break;
    case "/signup": // corrected the path
      path = "./signup.html";
      break;
    default:
      path = "./404.html";
      break;
  }

  fs.readFile(path, function (err, data) {
    // corrected the path variable
    if (err) {
      console.log("error", err);
      return res.end("<h1>Error</h1>");
    }
    return res.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is up and running on port", port);
});
