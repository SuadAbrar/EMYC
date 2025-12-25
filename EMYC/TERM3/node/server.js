const { addEmail } = require("./addEmail");
const { users } = require("./index");
const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log("requested");
  //   console.log(req.headers);
  if (req.url == "/addEmail") {
    const newUsers = addEmail(users);
    console.log(newUsers);
    // res.write(newUsers);
    res.writeHead(200);
    res.end(JSON.stringify(newUsers));
  } else if (req.url == "/addUser") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      //   console.log(body);
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);
      //   console.log(parsedBody);
      const email = {
        id: users.length + 1,
        ...parsedBody,
        email: `${parsedBody.name}${parsedBody.phone}@gmail.com`,
      };
      const user = addEmail(users);
      user.push(email);
      res.end(JSON.stringify(user));
    });
  }
  //   console.log(req.url);
  //   res.write("response");
});

// req.post('/addEmail', ()=>{

// })
server.listen(4000, () => {
  console.log("server is running with port 4000");
});
